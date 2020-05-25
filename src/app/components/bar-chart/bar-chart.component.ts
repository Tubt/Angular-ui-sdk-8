import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Ldm, LdmExt } from "../../../ldm";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { workspace } from "../../../utils/fixtures";

import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());


interface BarChartBucketProps {
  measures: any[];
  viewBy?: any[];
  backend: any;
  workspace: any;
}

@Component({
  selector: 'app-bar-chart',
  template: '<div class="bar-chart" style="height:500px" [id]="rootDomID"></div>',
})

export class BarChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  
  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): BarChartBucketProps {
    return {
      backend: backend,
      workspace: workspace,
      measures:[LdmExt.TotalSales1],
      viewBy: [Ldm.LocationResort]
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(BarChart, this.getProps()), this.getRootDomNode());
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
