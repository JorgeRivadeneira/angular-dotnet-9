import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGenerosComponent } from "../formulario-generos/formulario-generos.component";
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGenerosComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {

  @Input({transform: numberAttribute})
  id!: number;

  genero: GeneroDTO = {id: 1, nombre: 'Acción'}

  guardarCambios(genero: GeneroCreacionDTO) {
    // Aquí puedes agregar la lógica para guardar los cambios
    console.log(`Editando el género ${genero}`);
    // this.router.navigate(['/generos']);
  }
}
