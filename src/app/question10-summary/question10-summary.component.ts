import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-question10-summary',
  templateUrl: './question10-summary.component.html',
  styleUrls: ['./question10-summary.component.css']
})
export class Question10SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chartDom = document.getElementById('myChart10') as HTMLCanvasElement;
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
            { value: 19, name: 'Excellent' },
            { value: 17, name: 'Very good' },
            { value: 6, name: 'Good' },
            { value: 4, name: 'Average' }
           
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
