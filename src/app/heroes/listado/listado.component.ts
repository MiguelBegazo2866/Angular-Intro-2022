import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Linterna Verde', 'Hulk', 'Superman', 'Wolverine', 'Capitán América'];
  heroeBorrado: string= "";

  borrandoHeroe(){
    this.heroeBorrado= this.heroes.shift() || "";
  }

}
