import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-formulario-generos',
  imports: [MatButtonModule, RouterLink, MatInputModule, ReactiveFormsModule],
  templateUrl: './formulario-generos.component.html',
  styleUrl: './formulario-generos.component.css'
})
export class FormularioGenerosComponent implements OnInit {
ngOnInit() {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

@Input()
modelo: GeneroDTO | undefined;

@Output()
posteoFormulario = new EventEmitter<GeneroCreacionDTO>();

private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetraMayuscula()]}],
  });

  obtenerErrorNombre() {
    const nombre = this.form.controls.nombre;
    if (nombre.hasError('required')) {
      return 'El nombre es requerido.';
    }

    if(nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

    guardarCambios(){
      console.log(this.form.value);
      if(!this.form.valid) {
        return;
      }

      const genero = this.form.value as GeneroCreacionDTO;
      this.posteoFormulario.emit(genero);
      
      
    }
}
