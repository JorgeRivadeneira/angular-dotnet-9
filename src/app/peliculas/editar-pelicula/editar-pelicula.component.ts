import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  pelicula: PeliculaDTO = {id: 1, titulo: 'Spider Man', trailer: 'xyz', 
    fechaLanzamiento: new Date('2018-07-25'), 
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'};

  generosSeleccionados: SelectorMultipleDTO[] = [
    { llave: 2, valor: 'Acción' },
  ];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Drama' },    
    { llave: 3, valor: 'Comedia' }
  ];
  
  cinesSeleccionados: SelectorMultipleDTO[] = [
    { llave: 3, valor: 'Super Cines' }
  ];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Star Cines' },
    { llave: 2, valor: 'Multicines' },
  ]
  
  actoresSeleccionados = [
    {id: 1, nombre: 'Tom Hanks', personaje: 'Woody', foto: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTlpRBR9Lsf2J_zpiZvmHgz-t_8YyxFcKKO6X0TN3KAkTmRWWR0U7-0T6pM5QJh9mKTD6Fz37X1GpZpYa03rrgRHR3tZIAqK2Qg8AQzyanmgWJiRJAgBTGsHA1u7u-q3OD86vxEJnJZxmw'},    
  ];

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(`Editando Película`, pelicula);
  }
}
