import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import ReactHighcharts from 'react-highcharts';
import { Execute, LoadingComponent, ErrorComponent } from "@gooddata/sdk-ui";
import { LdmExt, Ldm } from "../../../ldm";
import { workspace } from "../../../utils/fixtures";

import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { newMeasure } from '@gooddata/sdk-model';
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

interface ExecuteProps {
  seriesBy: any[];
  slicesBy?: any;
  workspace: any;
  backend: any;
  children: any;
}
let self: any;
interface IExecuteExampleState {
  executionNumber: number;
  willFail: boolean;
}
interface ErrorProps {
  message: string;
  description: any;
}

@Component({
  selector: 'app-execute-example',
  templateUrl: './execute-example.component.html',
  styleUrls: ['./execute-example.component.css'],
})
export class ExecuteExampleComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  public rootDomID: string;
  executionNumber: number = 0;
  willFail: boolean = false;
  error: any;
  isLoading: boolean;
  result: any;


  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  measure = newMeasure(LdmExt.totalSalesIdentifier);
  francheFrees = newMeasure(LdmExt.franchiseFeesIdentifier);
  measureArray = [this.measure, this.francheFrees];
  slicesBy = Ldm.LocationResort;

  retry() {
    const nextExecutionNumber = self.executionNumber + 1;
    self.executionNumber = nextExecutionNumber;
    self.willFail = nextExecutionNumber % 2 !== 0;
    console.log("executionNumber", self.executionNumber);
    console.log("willFail", nextExecutionNumber % 2 !== 0);
    self.measure = newMeasure(self.willFail ? "thisDoesNotExits" : LdmExt.totalSalesIdentifier);
    self.error = self.willFail ? true : false;
    self.render(self.measure);
  };
  protected getErrorProps(error): ErrorProps {
    return {
      message: "There was an error getting your execution",
      description: JSON.stringify(error, null, 2)
    }
  }
  children =
    ({
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
      for (const series of result.data().series()) {
        // first series is for Won measure, second for Lost
        for (const dataPoint of series) {
          // now listing data points, one for each region
    
          let regionName = dataPoint.sliceTitles()[0];
          let value = dataPoint.formattedValue();
          console.log(value);
          return React.createElement("div", {
              className: "kpi"
            }, React.createElement("p", {
              className: "kpi s-execute-kpi"
            }, value, regionName));
        }
      }
      
    
      console.log(result.data().series());
      console.log(result.data().slices());
      // return React.createElement(ReactHighcharts, {
      //   config: {
      //     chart: {
      //       type: 'column',
      //     },
      //     title: {
      //       text: '🎉🍾🙌 My First Custom Chart 🙌🍾🎉'
      //     },
      //     // series:  result.data().series().firstForMeasure(this.measure).dataPoints()[0].formattedValue()
      //     series: result.executeResult
          
      //   }
      // })


      // const measureSeries1 = result.data().series().firstForMeasure(this.francheFrees);
      const measureSeries2 = result.data().series().firstForMeasure(this.measure);


      return React.createElement("div", {
        className: "kpi"
      }, React.createElement("p", {
        className: "kpi s-execute-kpi"
      }, measureSeries2.dataPoints()[0].formattedValue()));
    }

  protected render(measure) {
    ReactDOM.render(React.createElement(Execute, {
      seriesBy: [measure],
      slicesBy: [Ldm.LocationResort],
      workspace: workspace,
      backend: backend,
      children: this.children,
    }), this.getRootDomNode());
  }

  ngOnInit() {
    self = this;
    this.rootDomID = uuid.v4();
  }


  ngOnChanges() {
    this.render(self.measure);
  }

  ngAfterViewInit() {
    this.render(self.measure);
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}
