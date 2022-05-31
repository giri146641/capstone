import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-question2-summary',
  templateUrl: './question2-summary.component.html',
  styleUrls: ['./question2-summary.component.css']
})
export class Question2SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chartDom = document.getElementById('mychart2') as HTMLCanvasElement;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  title: {
    text: ' ',
    
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  // legend: {
  //   orient: 'vertical',
  //   left: 'left'
  // },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 30, name: 'Mediclaim policy' },
        { value: 7, name: 'Personal Accident Policy' },
        { value: 5, name: 'Term Life Policy' },
        { value: 4, name: 'parental Policy' }
       
      ],
      emphasis: {
        itemStyle: {
           shadowBlur: 10,
          shadowOffsetX: 0,
           shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);
  }

}
