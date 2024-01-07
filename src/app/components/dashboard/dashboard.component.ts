import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  lineChart =new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2.3, 5, 3, 8, 6.5],
        color: '#FF003a'
      }
    ] as any
  })

  pieChart =new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Exemplo de Gráfico de Pizza'
    },
    series: [
      {
        name: 'Dados',
        data: [
          { name: 'Categoria 1', y: 15, color: 'rgb(255, 102, 119)' },
          { name: 'Categoria 2', y: 65, color: 'rgb(204, 0, 46)' },
          { name: 'Categoria 3', y: 20, color: 'rgb(255, 0, 58)' },
        ]
      }
    ] as any
  })

  columnChart =new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Faturamento Anual'
    },
    xAxis: {
      categories: ['2018', '2019', '2020', '2021', '2022', '2023']
    },
    yAxis: {
      title: {
        text: 'Valores'
      },
      labels: {
        formatter: function () {
          return this.value + 'Bi';
        }
      }
    },
    series: [
      {
        name: '2018 - 2023',
        data: [40, 60, 50, 60.5, 90, 85],
        color: '#FF003a'
      }
    ] as any
  });

  areaChart =new Chart({
    chart: {
      type: 'area',
    },
    title: {
      text: 'Rendimento Mensal',
    },
    xAxis: {
      categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    },
    yAxis: {
      title: {
        text: 'Valores',
      },
      labels: {
        formatter: function () {
          return this.value + 'Mi';
        }
      }
    },
    series: [
      {
        name: '2022',
        data: [20, 25, 23, 30, 25, 35, 38, 20, 25, 23, 30, 25, 35, 38],
        color: '#000',
      },
      {
        name: '2023',
        data: [24, 28, 29, 35, 38, 45, 50,35, 38, 20, 25, 23, 30 ],
        color: '#FF1B00',

      },
    ] as any,
  });

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
