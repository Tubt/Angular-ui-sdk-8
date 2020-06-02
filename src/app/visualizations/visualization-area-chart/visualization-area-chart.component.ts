import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit ,OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { InsightView } from "@gooddata/sdk-ui-ext";
// import { projectId, areaVisualizationIdentifier } from "../../../utils/fixtures";
// import { Visualization } from '@gooddata/react-components';

import { LdmExt, Ldm } from "../../../ldm";
import { workspace } from "../../../utils/fixtures";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

interface VisualizationAreaChartProps {
  insight: any;
  workspace:any;  
  backend:any;
}

@Component({
  selector: 'app-visualization-area-chart',
  template: '<div class="pivot-table" style="height:500px" [id]="rootDomID"></div>',
})

export class VisualizationAreaChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): VisualizationAreaChartProps {
    return {
      backend:backend,
      workspace: workspace,
      insight: Ldm.Insights.PV,
      
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(InsightView, this.getProps()), this.getRootDomNode());
    }
  }

  ngOnInit() {
    this.rootDomID = uuid.v4();
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
