import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
// import { ColumnChart, Model } from '@gooddata/react-components';
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

import { LdmExt, Ldm } from "../../../ldm";
import { workspace } from "../../../utils/fixtures";

import { ColumnChart, ComboChart, Headline } from "@gooddata/sdk-ui-charts";
import { newPopMeasure, newRelativeDateFilter, newAbsoluteDateFilter } from "@gooddata/sdk-model";

// import {
//   totalSalesIdentifier,
//   quarterDateIdentifier,
//   yearDateDataSetAttributeIdentifier,
//   projectId,
// } from "../../../utils/fixtures";

interface SamePeriodColumnChartExampleBucketProps {
  backend: any;
  workspace: any;
  measures?: any[];
  viewBy?: any[];
  stackBy?: any;
  filters?: any[];
  sortBy?: any[];
  config?: any;
  onLoadingChanged?: any;
  onError?: any;
  primaryMeasure: any;
  secondaryMeasure: any;
}


const totalSalesYearAgo = newPopMeasure(LdmExt.TotalSales2, LdmExt.yearDateDataSetAttributeIdentifier, m =>
  m.alias("$ Total Sales - SP year ago").format("$#,##0.000"),
);
const filters = [
  // newPositiveAttributeFilter(Ldm.EmployeeName.Default, ["Abbie Adams", "Aaron Clements", "Adam Kimble", "Allen Garza"]),
  // newNegativeAttributeFilter(Ldm.EmployeeName.Default, { uris: [`/gdc/md/${workspace}/obj/2200/elements?id=6339877`, `/gdc/md/${workspace}/obj/2200/elements?id=6339879`] }),
  newAbsoluteDateFilter(LdmExt.dateDatasetIdentifier, "2016-01-01", "2016-12-31"),
  // newRelativeDateFilter(LdmExt.dateDatasetIdentifier, "GDC.time.year", -3, -3)
];


@Component({
  selector: 'app-same-period-column-chart-example',
  template: '<div class="same-period-column-chart-example" style="height:500px" [id]="rootDomID"></div>',
})

export class SamePeriodColumnChartExampleComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  
  onLoadingChanged(...params) {
    // eslint-disable-next-line no-console
    return console.log("SamePeriodColumnChartExampleComponent onLoadingChanged", ...params);
  }

  onError(...params) {
    // eslint-disable-next-line no-console
    return console.log("SamePeriodColumnChartExampleComponent onError", ...params);
  }

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): SamePeriodColumnChartExampleBucketProps {
    return {
      workspace: workspace,
      backend: backend,
      primaryMeasure: LdmExt.TotalSales2,
      secondaryMeasure: totalSalesYearAgo,
      // viewBy: [Ldm.DateQuarter],
      filters: filters,

      onLoadingChanged: this.onLoadingChanged,
      onError: this.onError,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Headline, this.getProps()), this.getRootDomNode());
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
