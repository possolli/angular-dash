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
      text: 'Ganho x Perca de Estoque'
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
      text: 'Gastos de Logística ao Longo do Ano'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          formatter: function () {
            return this.point.name + ' ' + this.point.y + ' Mi';
          }
        }
      }
    },
    series: [
      {
        name: 'Dados',
        data: [
          { name: 'Tarifas Aduaneiras', y: 15, color: 'rgb(255, 102, 119)' },
          { name: 'Impostos', y: 65, color: 'rgb(204, 0, 46)' },
          { name: 'Frete Internacional', y: 20, color: 'rgb(255, 0, 58)' },
          { name: 'Desembaraço Aduaneiro', y: 20, color: 'rgb(255, 0, 58)' }
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
        data: [20, 25, 23, 30, 25, 35, 38, 20, 25, 23, 30, 25],
        color: '#000',
      },
      {
        name: '2023',
        data: [24, 28, 29, 35, 38, 45, 50,35, 38, 20, 25, 23],
        color: '#FF1B00',

      },
    ] as any,
  });

  barChart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Custos de Importação'
    },
    xAxis: {
      categories: ['China', 'Vietnã', 'Malásia', 'Tailândia']
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        name: '2023',
        data: [65, 55, 50, 40],
        color: '#FF003a'
      }
    ] as any
  });

}
