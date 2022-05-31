import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-question9-summary',
  templateUrl: './question9-summary.component.html',
  styleUrls: ['./question9-summary.component.css']
})
export class Question9SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chartDom = document.getElementById('myChart9') as HTMLCanvasElement;
    var myChart = echarts.init(chartDom);
    var option;
    
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
            { value: 4, name: 'Time Maintainance' },
            { value: 7, name: 'Work Culture' },
            { value: 6, name: 'Team Mates' },
            { value: 4, name: 'Coordination with team' }
           
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

