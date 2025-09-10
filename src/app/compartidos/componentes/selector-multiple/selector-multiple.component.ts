import { Component, Input } from '@angular/core';
import { SelectorMultipleDTO } from './selectorMultipleModelo';

@Component({
  selector: 'app-selector-multiple',
  imports: [],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css'
})
export class SelectorMultipleComponent {

  @Input()
  Seleccionados!: SelectorMultipleDTO[];

  @Input()
  NoSeleccionados!: SelectorMultipleDTO[];

  seleccionar(elemento: SelectorMultipleDTO, indice: number) {
    this.Seleccionados.push(elemento);
    this.NoSeleccionados.splice(indice, 1);
  }

  deseleccionar(elemento: SelectorMultipleDTO, indice: number) {
    this.NoSeleccionados.push(elemento);
    this.Seleccionados.splice(indice, 1);
  }

  seleccionarTodos() {
    this.Seleccionados.push(...this.NoSeleccionados);
    // this.NoSeleccionados = []; //o tambien:
    this.NoSeleccionados.length = 0; //es lo mismo que lo anterior
  }

  deseleccionarTodos() {
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados.length = 0;
  }

}
