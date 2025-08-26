import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {

  @Input({transform: numberAttribute})
  id!: number;


  actor: ActorDTO = {id: 1, nombre: 'Jorge', fechaNacimiento: new Date(1982,9,10), 
    foto: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'};
    
  guardarCambios(actor: ActorCreacionDTO) {
    console.log(`Editando el actor ${actor}`);
  }

}
