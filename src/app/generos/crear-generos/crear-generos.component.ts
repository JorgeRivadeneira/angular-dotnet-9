import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';
import { FormularioGenerosComponent } from "../formulario-generos/formulario-generos.component";
import { GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [FormularioGenerosComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  private router = inject(Router);
  

  guardarCambios(genero: GeneroCreacionDTO) {
    // Aquí puedes agregar la lógica para guardar los cambios
    console.log(`Creando el género ${genero}`);
    // this.router.navigate(['/generos']);

    
  }


}
