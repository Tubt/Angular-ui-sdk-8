import { Component, OnInit } from '@angular/core';
import React from "react";
import { RawExecute, LoadingComponent, ErrorComponent } from "@gooddata/sdk-ui";
import toPairs from "lodash/toPairs";
import groupBy from "lodash/groupBy";

import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import { workspace } from "../../../utils/fixtures";
import { Ldm } from "../../../ldm";
// import { useBackend } from "../../context/auth";
import invariant from 'invariant';
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

// let self: any;

const getAttributeHeaderItemName = (x: any) => x.attributeHeaderItem.name;
const withIndex = (fn: any) => {
    let index = 0;
    return (...args: any) => fn(index++, ...args);
};

const resultStyle = {
    maxHeight: 200,
    overflow: "auto",
    padding: "1rem",
    backgroundColor: "#EEE",
};

@Component({
  selector: 'app-execute-attribute',  
  template: `<div class="s-execute" style="height:500px" [id]="rootDomID"></div>`,
})
export class ExecuteAttributeComponent implements OnInit {
  execution = backend
  .workspace(workspace)
  .execution()
  .forItems([Ldm.LocationState, Ldm.LocationName.Default]);

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  children =({
    error,
    isLoading,
    result
  }) => {
    if (error) {
      return React.createElement(ErrorComponent, {
        message: "There was an error getting your execution",
        description: JSON.stringify(error, null, "  ")
      });
    }
  
    if (isLoading || !result) {
      return React.createElement(LoadingComponent, null);
    }
  
    const [[locationStateHeaders, locationNameHeaders]] = result.dataView.headerItems;
    const locationStates = locationStateHeaders.map(getAttributeHeaderItemName);
    const locations = locationNameHeaders.map(getAttributeHeaderItemName);
    const locationsByState = groupBy(locations, withIndex(index => locationStates[index]));
    const locationStateLocationsPairs = toPairs(locationsByState);
    return React.createElement("div", null, React.createElement("ul", {
      className: "attribute-values s-execute-attribute-values"
    }, locationStateLocationsPairs.map(([locationState, _locations]) => React.createElement("li", {
      key: locationState
    }, React.createElement("strong", null, locationState), React.createElement("ul", null, _locations.map(location => React.createElement("li", {
      key: location
    }, location)))))), React.createElement("p", null, "Full execution response and result as JSON:"), React.createElement("pre", {
      style: resultStyle
    }, JSON.stringify({
      result,
      isLoading,
      error
    }, null, 2)));
  }
  protected render () {
    ReactDOM.render(React.createElement("div", null, React.createElement(RawExecute, {
      execution: this.execution,
      children: this.children
    }, )),this.getRootDomNode())
  }
  ngOnInit() {
    // self=this;
    this.rootDomID = uuid.v4();
    // this.rootErrorDomID =uuid.v4();
  }


  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}
