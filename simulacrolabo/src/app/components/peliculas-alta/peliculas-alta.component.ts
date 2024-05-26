import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Importar SweetAlert
import { PeliculasService } from '../../servicios/peliculas.service';
import { Pelicula } from '../../clases/pelicula';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablaActoresComponent } from '../tabla-actores/tabla-actores.component';



@Component({
  selector: 'app-peliculas-alta',
  imports: [NgFor, NgIf, NgClass, DatePipe, FormsModule, TablaActoresComponent],
  standalone: true,
  templateUrl: './peliculas-alta.component.html',
  styleUrls: ['./peliculas-alta.component.css']
})
export class PeliculasAltaComponent {
  nombre: string = "";
  tipo: string = "";
  fechaEstreno: Date = new Date();
  cantidadPublico: string = "";
  foto: string = "";
  actor: string = "";

  constructor(private router: Router, private peliculasService: PeliculasService) {}

  async OnSaveClick() {
    try {
      let tipoPelicula = this.convertStringToEnum(this.tipo);
      let pelicula = new Pelicula('', this.nombre, tipoPelicula, this.fechaEstreno, this.actor, parseInt(this.cantidadPublico), this.foto);

      await this.peliculasService.addPelicula(pelicula);
      Swal.fire('¡Éxito!', 'Película agregada correctamente', 'success');
      this.router.navigateByUrl("busqueda");
    } catch (ex) {
      Swal.fire('¡Error!', 'La película no pudo agregarse correctamente', 'error');
    }
  }

  OnCancelClick() {
    this.router.navigateByUrl("busqueda");
  }

  convertStringToEnum(str: string): string {
    return str;
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.foto = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  receiveActors(actor: any) {
    if (actor) {
      this.actor = actor.nombre + ' ' + actor.apellido;
    } else {
      this.actor = '';
    }
  }
}