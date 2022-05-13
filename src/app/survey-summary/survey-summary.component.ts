import { Component, OnInit } from '@angular/core';
//import * as echarts from 'echarts';
@Component({
  selector: 'app-survey-summary',
  templateUrl: './survey-summary.component.html',
  styleUrls: ['./survey-summary.component.css']
})
export class SurveySummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
//     var chartDom = document.getElementById('main') as HTMLCanvasElement ;
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   xAxis: {
//     type: 'category',
//     data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7','Q8', 'Q9', 'Q10']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [100, 130, 10, 80, 90, 60, 70,22,45,77],
//       type: 'bar',
//       name:"Excellent"
//     },
//     {
//       data: [45,56,77,88,99,90,73,11,32,67],
//       type: 'bar'
//     },
//     {
//       data: [78,56,66,33,44,22,51,34,54,23],
//       type: 'bar'
//     },
//     {
//       data: [67,44,22,46,63,22,12,55,67,88],
//       type: 'bar'
//     }
//   ]
// };

// option && myChart.setOption(option);

  }

}
