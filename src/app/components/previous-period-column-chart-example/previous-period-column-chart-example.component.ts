import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

import { ColumnChart,BarChart,AreaChart, LineChart, ComboChart, Heatmap, PieChart, BulletChart, Headline } from "@gooddata/sdk-ui-charts";
import { newPopMeasure, newRelativeDateFilter, newPreviousPeriodMeasure } from "@gooddata/sdk-model";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

import { LdmExt, Ldm } from "../../../ldm";
import { workspace } from "../../../utils/fixtures";


// const totalSalesYearAgo = newPopMeasure(Ldm.$TotalSales, LdmExt.yearDateDataSetAttributeIdentifier, m =>
//   m.alias("$ Total Sales - SP year ago"),
// );
// const filters = [newRelativeDateFilter(dateDataSetUri, "GDC.time.year", -3, -3)];
interface PreviousPeriodColumnChartExampleBucketProps {
  backend: any;
  workspace: any;
  measures?: any[];
  measure?:any;
  viewBy?: any;
  stackBy?: any;
  filters?: any[];
  sortBy?: any[];
  config?: any;
  onLoadingChanged?: any;
  onError?: any;
  primaryMeasure: any;
  secondaryMeasure?: any;
  trendBy?: any;
  rows?:any;
  columns?: any;
  targetMeasure?: any;
  comparativeMeasure?: any;
}

const primaryMeasure = LdmExt.TotalSales2;
const secondaryMeasure = newPreviousPeriodMeasure(
  LdmExt.TotalSales2,
  [{ dataSet: LdmExt.dateDatasetIdentifier, periodsAgo: 1 }],
  m => m
  // .alias("$ Total Sales - period ago")
  .localId("pop-totalsales")
  // .title("PoP"),
);

const measures = [secondaryMeasure, primaryMeasure];
@Component({
  selector: 'app-previous-period-column-chart-example',
  template: '<div class="previous-period-column-chart-example" style="height:500px" [id]="rootDomID"></div>',
})

export class PreviousPeriodColumnChartExampleComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  // measures = [
  //   Model.measure(totalSalesIdentifier).localIdentifier("totalSales").alias("$ Total Sales"),
  //   Model.previousPeriodMeasure("totalSales", [{ dataSet: dateDataSetUri, periodsAgo: 1 },]).alias("$ Total Sales - period ago"),]

  // viewBy = [Model.attribute(quarterDateIdentifier)]

  // filters = [Model.relativeDateFilter(dateDataSetUri, "GDC.time.year", -2, -1)]

  // config = {
  //   dataLabels: {
  //     visible: 'auto'
  //   },
  //   legend: {
  //     enabled: true,
  //     position: 'top',
  //   },
  //   separators: {
  //     thousand: ',',
  //     decimal: '.'
  //   },
  //   stackMeasures: false,
  //   stackMeasuresToPercent: false,
  // }

  // onLoadingChanged(...params) {
  //   // eslint-disable-next-line no-console
  //   return console.log("PreviousPeriodColumnChartExampleComponent onLoadingChanged", ...params);
  // }

  // onError(...params) {
  //   // eslint-disable-next-line no-console
  //   return console.log("PreviousPeriodColumnChartExampleComponent onError", ...params);
  // }

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): PreviousPeriodColumnChartExampleBucketProps {
    return {
      primaryMeasure: secondaryMeasure,
      targetMeasure: primaryMeasure,
      comparativeMeasure: LdmExt.MenuItemSales,
      workspace: workspace,
      backend: backend,
      // measures: [Ldm.$TotalSales, totalSalesYearAgo],
      viewBy: Ldm.DateQuarter,
      // primaryMeasure: primaryMeasure,
      // secondaryMeasure: secondaryMeasure,
      filters: [newRelativeDateFilter(LdmExt.dateDatasetIdentifier, "GDC.time.year", -3, -2)]
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(BulletChart, this.getProps()), this.getRootDomNode());
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
