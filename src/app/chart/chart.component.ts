import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  // グラフの表示サイズ
  view: number[] = [700, 200];

  // 設定
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

　// カラーテーマ
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // サンプルデータ
  sampleData = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 40632
        },
        {
          "name": "2000",
          "value": 36953
        },
        {
          "name": "1990",
          "value": 31476
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
