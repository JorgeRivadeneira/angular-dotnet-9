import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleComponent } from '../../compartidos/componentes/selector-multiple/selector-multiple.component';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';
import { actorAutoComnpleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-pelicula',
  imports: [RouterLink, MatButtonModule, FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  generosSeleccionados: SelectorMultipleDTO[] = [];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 2, valor: 'Acción' },
    { llave: 3, valor: 'Comedia' }
  ]

  cinesSeleccionados: SelectorMultipleDTO[] = [];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Star Cines' },
    { llave: 2, valor: 'Multicines' },
    { llave: 3, valor: 'Super Cines' }
  ]

  actoresSeleccionados: actorAutoComnpleteDTO[] = [];

    guardarCambios(pelicula: PeliculaCreacionDTO){
        console.log(`Pelicula Creada`, pelicula);
    }
}
