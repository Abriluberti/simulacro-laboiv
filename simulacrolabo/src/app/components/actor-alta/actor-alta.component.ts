import { Component } from '@angular/core';
import { ActorService } from '../../servicios/actor.service';
import { Actor } from '../../clases/actor';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';
import { TablaPaisesComponent } from "../tabla-paises/tabla-paises.component";

@Component({
    selector: 'app-actor-alta',
    standalone: true,
    templateUrl: './actor-alta.component.html',
    styleUrl: './actor-alta.component.css',
    imports: [NgFor, NgIf, NgClass, DatePipe, FormsModule, TablaPeliculaComponent, TablaPaisesComponent]
})
export class ActorAltaComponent {
  nombre: string = '';
  apellido: string = '';
  edad: number | null = null;
  pais: string = '';
  bandera: any;

  constructor(private actorService: ActorService) {}

  async agregarActor() {
      if (this.nombre && this.apellido && this.pais) {
          try {
              const nuevoActor: Actor = {
                  // Asignar un valor manualmente al id o permitir que sea generado automáticamente
                  id: '', // Si se genera automáticamente, dejar en blanco
                  nombre: this.nombre,
                  apellido: this.apellido,
                  edad: this.edad !== null ? this.edad : 0, // Asegurarse de que la edad no sea null
                  pais: this.pais
              };

              await this.actorService.addActor(nuevoActor);
              this.resetForm();
              Swal.fire('¡Éxito!', 'Actor agregado correctamente', 'success');
          } catch(ex) {
              console.error('Error al agregar actor:', ex);
              Swal.fire('¡Error!', 'El actor no pudo agregarse correctamente', 'error');
          }
      } else {
          Swal.fire('¡Advertencia!', 'Completa todos los campos', 'warning');
      }
  }

  onPaisSeleccionado(pais: string) {
      this.pais = pais;
  }

  resetForm() {
      this.nombre = '';
      this.apellido = '';
      this.pais = '';
      this.edad = null;
      this.bandera = null;
  }
}