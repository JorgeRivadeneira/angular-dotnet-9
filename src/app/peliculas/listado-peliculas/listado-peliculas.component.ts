import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe, ListadoGenericoComponent, MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
ngOnInit(): void {

  }

  @Input({required: true})
  peliculas!: any[];

  // agregarPelicula() {
  //   this.peliculas.push({
  //     titulo: 'Mission Impossible 7',
  //     fechaLanzamiento: new Date(),
  //     precio: 800.00,
  //     poster: 'https://derechadiario.com.ar/filesedc/uploads/image/post/mision-imposible-estreno-22-de-mayo-tom-cruise-sentencia-final_1200_800.webp'
  //   });
  // }

  // remover(pelicula: any) {
  //   const index = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);
  //   this.peliculas.splice(index, 1);

  // }
}
