import { Component, OnInit } from '@angular/core';
import { DynamicMeasureComponent } from '../../components/dynamic-measure/dynamic-measure.component';
import  DynamicMeasureComponentSRC  from '!!raw-loader!../../components/dynamic-measure/dynamic-measure.component.ts';
import  DynamicMeasureComponentHTML  from '!!raw-loader!../../components/dynamic-measure/dynamic-measure.component.html';
import  DynamicMeasureComponentCSS  from '!!raw-loader!../../components/dynamic-measure/dynamic-measure.component.css';

@Component({
  selector: 'app-dynamic-measure-component',
  templateUrl: './dynamic-measure-component.component.html',
  styleUrls: ['./dynamic-measure-component.component.css']
})

export class DynamicMeasureComponentComponent implements OnInit {

  constructor() { }

  for = DynamicMeasureComponent;
  ts = DynamicMeasureComponentSRC;
  html = DynamicMeasureComponentHTML;
  css = DynamicMeasureComponentCSS;

  ngOnInit() {
  }

}
