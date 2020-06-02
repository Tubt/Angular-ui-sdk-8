import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Table, Model } from '@gooddata/react-components';
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

import { LdmExt, Ldm } from "../../../ldm";
import { workspace } from "../../../utils/fixtures";

// import {
//   projectId,
//   monthDateIdentifier,
//   totalSalesIdentifier,
//   dateDataSetUri
// } from '../../../utils/fixtures.js';
import { PivotTable } from '@gooddata/sdk-ui-pivot';
import { newPreviousPeriodMeasure, newArithmeticMeasure, newAbsoluteDateFilter } from '@gooddata/sdk-model';

interface ArithmeticMeasureChangeBucketProps {
  workspace: any;
  backend: any;
  measures?: any[];
  rows?: any[];
  columns?:any[];
  filters?: any[];
  onLoadingChanged?: any;
  onError?: any;
}

const totalSalesYearAgoBucketItem = newPreviousPeriodMeasure(
  LdmExt.TotalSales1,
  [{ dataSet: LdmExt.dateDatasetIdentifier, periodsAgo: 1 }],
  m => m.alias("$ Total Sales - year ago"),
);

const changeMeasure = newArithmeticMeasure([LdmExt.FranchiseFees,LdmExt.TotalSales1], "ratio", m =>
  m.title("% Total Sales Change"),
);

const measures = [LdmExt.FranchiseFees, LdmExt.TotalSales1, changeMeasure];

const rows = [Ldm.DateMonthYear.Short];

const filters = [newAbsoluteDateFilter(LdmExt.dateDatasetIdentifier, "2017-01-01", "2017-12-31")];

const style = { height: 200 };


@Component({
  selector: 'app-arithmetic-measures-change',
  template: '<div class="arithmetic-measures-change" style="height:400px" [id]="rootDomID"></div>',
})
export class ArithmeticMeasureChangeComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  public onLoadingChanged(...params: any) {
    // tslint:disable-next-line:no-console
    return console.log("PreviousPeriodHeadlineExample onLoadingChanged", ...params);
}

public onError(...params: any) {
    // tslint:disable-next-line:no-console
    return console.log("PreviousPeriodHeadlineExample onError", ...params);
}
  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps():  ArithmeticMeasureChangeBucketProps {
    return {
      workspace: workspace,
      backend: backend,
      measures: measures,
      rows: rows,
      columns: [Ldm.DateYear],
      onError: this.onError,
      onLoadingChanged: this.onLoadingChanged,
      // filters: filters,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(PivotTable, this.getProps()), this.getRootDomNode());
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
