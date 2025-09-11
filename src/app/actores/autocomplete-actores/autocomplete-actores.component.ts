import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';
import { actorAutoComnpleteDTO } from '../actores';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, 
    MatInputModule, FormsModule, MatTableModule, MatInputModule
  ],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {
  control = new FormControl();

  actoresCine: actorAutoComnpleteDTO[] = [
    {id: 1, nombre: 'Tom Hanks', personaje: '', foto: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTlpRBR9Lsf2J_zpiZvmHgz-t_8YyxFcKKO6X0TN3KAkTmRWWR0U7-0T6pM5QJh9mKTD6Fz37X1GpZpYa03rrgRHR3tZIAqK2Qg8AQzyanmgWJiRJAgBTGsHA1u7u-q3OD86vxEJnJZxmw'},
    {id: 1, nombre: 'Claudia Schiefer', personaje: '', foto: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTmgkLihFla-GrYWTaUgGhpV6PcdDlXtjeHQJ960V44Rvr394OLdafzv8p_M4PgNDafRig3a04PE_KFAt_d4VefM-EFc77AFpzq0FILvdqp2_sKVi5UPDngeokxh7bwfmvauat8hy_KOag'},
    {id: 1, nombre: 'Nicole Kidman', personaje: '', foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQh4cs09HW-MrjTpcK8Vmm8wXLNjo70g6gvIETn0NC2Otdo6hDlAzd1XMe06gRczelXa21fhgGq6FSdJ3gbdqno03rd3-Bjr3EzyB5DbuIm'},
    {id: 1, nombre: 'Silvester Stallone', personaje: '', foto: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScNJIVEqi9D46I50_01NStgaxER9kcmkE5xqcMeG9pdNL-d9n1SIwMBa95qCmbYk_9xpCvgbxgcwPHKGq7GYRhEzI3h9qdU-hEQsiICDdo2Q'},
    {id: 1, nombre: 'Jean Claude Vandame', personaje: '', foto: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4ZqPzBysXkJ2wuu0KFHUA5hhg7LTSiutugeg2kQV9NE-ftoXHrn9KXPJhmTg16F62grLgLku8_ZLcUNTHIUVZ-nlY3UkebVv3UXSA8G4IfA'},
    {id: 1, nombre: 'Bruce Willis', personaje: '', foto: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR0TeEoL3Fpjppj4RwJaXAwAlHwh1L03IlvF8tI00XEj803zPRaDyhsLcOlRcpTqJiW0d5s4cbd6tjoC_YQ8EBD7fdbKCaSIYixMYlZ3Na4a5lW7lBTZpPEZSU-p8cBhCzL_o8mwiBRyik'}
  
  ];

  actoresSeleccionados: actorAutoComnpleteDTO[] = [];
  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table!: MatTable<actorAutoComnpleteDTO>;

  actorSeleccionado(event: MatAutocompleteSelectedEvent){
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');

    if(this.table != undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor: actorAutoComnpleteDTO){
    const indice = this.actoresSeleccionados.findIndex((a: actorAutoComnpleteDTO) => a.id !== actor.id);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }
}
