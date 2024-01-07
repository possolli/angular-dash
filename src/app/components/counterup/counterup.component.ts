import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counterup',
  templateUrl: './counterup.component.html',
  styleUrls: ['./counterup.component.css']
})
export class CounterupComponent implements OnInit {
  @Input() valorInicial: number = 0;
  contador: number = 0;
  incremento: number = 1;
  intervalo: number = 20;

  ngOnInit() {
    this.iniciarContador();
  }

  iniciarContador() {
    const intervalId = setInterval(() => {
      this.contador += this.incremento;

      if (this.contador >= this.valorInicial) {
        this.contador = this.valorInicial;
        clearInterval(intervalId);
      }
    }, this.intervalo);
  }
}
