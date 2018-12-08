import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';

import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [GraphComponent],
  exports: [GraphComponent]
})
export class GraphModule { }
