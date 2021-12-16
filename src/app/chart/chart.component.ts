import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { MockyService } from '../mocky.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart = []; // This will hold our chart info

  constructor(private _mocky: MockyService) {}

  ngOnInit() {
    this._mocky.getData()
      .subscribe(res => {

        let labels= res["chartData"].map((x:{Apartment: string;}) => x.Apartment);
        let values = res["chartData"].map((x:{Rent: number;}) => x.Rent);



       var ctx = document.getElementById('pieChart') as HTMLCanvasElement;
       var pieChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label:'Apartments',
              data: values,
              backgroundColor: ['red','blue','violet','brown','yellow','indigo','orange','purple','green'],
              borderColor: "black",
              fill: false
            }

          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true

            }],
            yAxes: [{
              display: true

            }],

          },
          animation: {
            easing:"easeInQuad",
            duration:2000
          }

        }
      });


       })

  }
}


