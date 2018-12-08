import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  title = 'dinamic';
  @Input() value: any[];
  @Input() yAxisLabel: string;
  view = [700,400];
  roundDomains = true;
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showXAxisLabel = true;
  xAxisLabel = 'T (s)'

  showYAxisLabel = true;

  legend = true;
  legendPosition = "below";

  timeline = true;
  colorScheme = {
      domain: [
          '#5aad28',
      ]
  };

  ngOnInit(){

  }

}
