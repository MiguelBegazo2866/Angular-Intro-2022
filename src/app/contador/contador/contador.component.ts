import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
      <h1>MBL con Angular en proyecto : {{ titulo }}</h1>
      <h3>La base es : <strong> {{ base }}</strong></h3>

      <button (click)="acumular(1)"> +{{ base }} </button>
      <span> {{ numero }}</span>
      <button (click)="acumular(-1)"> -{{ base }} </button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base : number = 5;

    acumular(factor: number){
      this.numero += this.base * factor;
    }
}
