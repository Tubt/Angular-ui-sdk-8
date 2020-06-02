import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { LdmExt, Ldm } from "../../../ldm";
import { workspace } from "../../../utils/fixtures";

import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

interface AreaChartBucketProps {
  measures: any[];
  viewBy?: any;
  backend: any;
  workspace: any;
}

@Component({
  selector: 'app-area-chart',
  template: '<div class="area-chart" style="height:500px" [id]="rootDomID"></div>',
})

export class AreaChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  measures = [
    Ldm.MenuItemQuantity.Sum,
    Ldm.ScheduledCost.Sum,
    // LdmExt.FranchiseFeesAdRoyalty,
    // LdmExt.FranchiseFeesInitialFranchiseFee,
    // LdmExt.FranchiseFeesOngoingRoyalty,
  ];  

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): AreaChartBucketProps {
    return {
      backend: backend,
      workspace: workspace,
      measures: this.measures,
      viewBy: LdmExt.monthDate
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(ColumnChart, this.getProps()), this.getRootDomNode());
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
