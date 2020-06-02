import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import React, { useState } from "react";
import { RawExecute, LoadingComponent, ErrorComponent } from "@gooddata/sdk-ui";
import { newMeasure } from "@gooddata/sdk-model";

import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import { workspace } from "../../../utils/fixtures";
import { LdmExt } from "../../../ldm";

import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import invariant from 'invariant';
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
let self: any;

interface RawExecuteProps {
  execution: any;
  children: any;
}
interface ErrorProps {
  message: string;
  description: any;
}
const resultStyle = {
  maxHeight: 200,
  maxWidth: "100%",
  overflow: "auto",
  padding: "1rem",
  backgroundColor: "#EEE",
};
const fontStyle = {
  "height": "60px",
  "margin": "10px 0",
  "fontSize": "50px",
  "lineHeight": "60px",
  "whiteSpace": "nowrap",
  "verticalAlign": "bottom",
  "fontWeight": "700",
};

let executionNumber: number = 0;
let willFail: boolean = false;
let measure = newMeasure(LdmExt.totalSalesIdentifier);

@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.css']
})

export class ExecuteComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  error: boolean = false;
  retry() {
    const nextExecutionNumber = executionNumber + 1;
    executionNumber = nextExecutionNumber;
    willFail = nextExecutionNumber % 2 !== 0;
    console.log("executionNumber", self.executionNumber);
    console.log("willFail", nextExecutionNumber % 2 !== 0);
    measure = newMeasure(willFail ? "thisDoesNotExits" : LdmExt.totalSalesIdentifier);
    self.error = willFail ? true : false;
    self.render(measure);
  };

  public rootDomID: string;

  protected getProps(measure): RawExecuteProps {
    return {
      execution: backend
        .workspace(workspace)
        .execution()
        .forItems([measure]),
      children: this.children,
    }
  }
  protected getErrorProps(error): ErrorProps {
    return {
      message: "There was an error getting your execution",
      description: JSON.stringify(error, null, 2)
    }
  }
  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  children = ({
    error,
    isLoading,
    result
  }) => {
    if (error) {
      return React.createElement(ErrorComponent, this.getErrorProps(error));
    }

    if (isLoading || !result) {
      return React.createElement(LoadingComponent, null);
    }
    return React.createElement("div", { className: "kpi" }, 
    React.createElement("p", {  className: "kpi s-execute-kpi",  style: fontStyle }, result.dataView.data[0]), 
    React.createElement("p", null, "Full execution response and result as JSON:"), 
    React.createElement("pre", { style: resultStyle }, JSON.stringify({ result, isLoading, error }, null, 2)));
  }

  protected render(measure) {
    console.log("render: ", willFail);
    console.log("this.measure", measure);
    ReactDOM.render(React.createElement(RawExecute, this.getProps(measure)), this.getRootDomNode())
  }

  ngOnInit() {
    self = this;
    this.rootDomID = uuid.v4();
  }


  ngOnChanges() {
    this.render(measure);
  }

  ngAfterViewInit() {
    this.render(measure);
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}
