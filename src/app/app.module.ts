import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { CustomNgxChartsBarHorizontalComponent } from './custom-ngx-charts-bar-horizontal/custom-ngx-charts-bar-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CustomNgxChartsBarHorizontalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
