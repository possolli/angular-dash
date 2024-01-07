import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent {
  pieChart =new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Mais Vendidos'
    },
    series: [
      {
        name: 'Dados',
        data: [
          { name: 'BRUTUS TA', y: 60, color: '#FF1B00' },
          { name: 'SPORT PLUS', y: 40, color: '#FF0042' },
          { name: 'FASTWAY A3', y: 35, color: '#FF4600' },
          { name: 'FORZA MT2', y: 30, color: '#A21B00' },
          { name: 'CITYMAX', y: 20, color: 'rgb(255, 184, 154)' },
          { name: 'PREMIUM F3', y: 15, color: 'rgb(255, 223, 192)' },
        ]
      }
    ] as any
  })
  barChart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Exemplo de Gráfico de Barras'
    },
    xAxis: {
      categories: ['Categoria 1', 'Categoria 2', 'Categoria 3']
    },
    yAxis: {
      title: {
        text: 'Valores'
      }
    },
    series: [
      {
        name: 'Série 1',
        data: [10, 20, 15]
      }
    ] as any
  });
}
