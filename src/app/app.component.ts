import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart }  from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dinamic';
  value: any[] = [
    {
      "name": "Atomo 1",
      "series": [
        {
          "value": 1 * (10 ^ -3),
          "name": "0"
        },
        {
          "value": 16.92 * (10 ^ 11),
          "name": "1"
        }
      ]
    },
    {
      "name": "Atomo 2",
      "series": [
        {
          "value": 3 * (10 ^ -3),
          "name": "0"
        },
        {
          "value": -16.92 * (10 ^ 11),
          "name": "1"
        }
      ]
    }
  ]

  //region options
  view = [700,400];
  yAxisLabel: string = 'X (m)';
  roundDomains = true;
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showXAxisLabel = true;

  showYAxisLabel = true;

  legend = true;
  legendPosition = "below";

  timeline = true;
  colorScheme = {
      domain: [
        '#5aad28',
        '#5bb',
        '#F43',
        '#ee8f39',
        '#09ad6d',
        '#0b0bbb',
        '#ff1ada',
        '#ee004e'
      ]
  };

  dados: any[] = [
    {
      nome: "Atomo 1",
      tempo: 0,
      xm: 1 * Math.pow(10,-3),
      ym: 1 * Math.pow(10,-3),
      zm: 1 * Math.pow(10,-3),
      vx: 0,
      vy: 0,
      vz: 0,
      ax: 1.7 * Math.pow(10, 19),
      ay: 1.7 * Math.pow(10,19),
      az: 1.7 * Math.pow(10,18),
      ut: 3.4 * Math.pow(10,-10),
      u: 3.4 * Math.pow(10,-10),
      ec: 0
    },
    {
      nome: "Atomo 2",
      tempo: 0,
      xm: 3 * Math.pow(10,-3),
      ym: 3 * Math.pow(10,-3),
      zm: 3 * Math.pow(10,-3),
      vx: 0,
      vy: 0,
      vz: 0,
      ax: 1.7 * Math.pow(10,19),
      ay: 1.7 * Math.pow(10,19),
      az: 1.7 * Math.pow(10,18),
      ut: 3.4 * Math.pow(10,-10),
      u: 3.4 * Math.pow(10,-10),
      ec: 0
    },
    {
      nome: "Atomo 1",
      tempo: 1 * Math.pow(10,-3),
      xm: 16.92 * Math.pow(10,11),
      ym: 16.92 * Math.pow(10,11),
      zm: 16.92 * Math.pow(10,11),
      vx: 8.46 * Math.pow(10,14),
      vy: 8.46 * Math.pow(10,14),
      vz: 8.46 * Math.pow(10,14),
      ax: - 2.9 * Math.pow(10,23),
      ay: - 2.9 * Math.pow(10,23),
      az: - 2.9 * Math.pow(10,23),
      ut: 0.3 * Math.pow(10,9),
      u: 0.3 * Math.pow(10,9),
      ec: 71.5 * Math.pow(10,3)
    },
    {
      nome: "Atomo 2",
      tempo: 1 * Math.pow(10,-3),
      xm: - 16.92 * Math.pow(10,11),
      ym: - 16.92 * Math.pow(10 , 11),
      zm: - 16.92 * Math.pow(10,11),
      vx: - 8.46 * Math.pow(10,14),
      vy: - 8.46 * Math.pow(10,14),
      vz: - 8.46 * Math.pow(10,14),
      ax: 2.9 * Math.pow(10,23),
      ay: 2.9 * Math.pow(10,23),
      az: 2.9 * Math.pow(10,23),
      ut: 0.3 * Math.pow(10,9),
      u: 0.3 * Math.pow(10,9),
      ec: 71.5 * Math.pow(10,3)
    }
  ];

  ngOnInit() {
    let newData : any[] = [];
    for(let i = 0; i < this.dados.length; i++){


      let fil : number = newData.indexOf({name: this.dados[i].nome})

      if(fil < 0){
        newData.push(
          {
            "name": this.dados[i].nome,
            "series": [{
              "value": this.dados[i]['xm'],
              "name": this.dados[i].tempo
            }]
          }
        )
      } else {
        newData[fil].series.push({
          "value": this.dados[i]['xm'],
          "name": this.dados[i].tempo
        })
      }


    }
    
    this.value = [...newData];
    console.log(this.value)
  }

  change(data) {
    console.log('Teste')
    this.value[0]["series"] = [
      {
        "value": 0,
        "name": "0"
      },
      {
        "value": 1,
        "name": "1"
      }
    ]

    this.value = [...this.value]
    this.yAxisLabel = 'Y (m)'
  }

  changeChart(filterToConsider){
    let novoData : any[] = [];
    for(let i = 0; i < this.dados.length; i++){


      let fil : number = novoData.indexOf({name: this.dados[i].nome})

      if(fil < 0){
        novoData.push(
          {
            "name": this.dados[i].nome,
            "series": [{
              "value": this.dados[i][filterToConsider],
              "name": this.dados[i].tempo
            }]
          }
        )
      } else {
        novoData[fil].series.push({
          "value": this.dados[i][filterToConsider],
          "name": this.dados[i].tempo
        })
      }


    };
    
    this.value = [...novoData];
    this.yAxisLabel = filterToConsider;
    console.log(novoData);
  }

}
