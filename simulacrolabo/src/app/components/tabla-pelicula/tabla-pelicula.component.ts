import { DatePipe, NgClass, NgFor, NgIf, NgIfContext } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, DatePipe],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css'
})
export class TablaPeliculaComponent {
  @Input() peliculas: Pelicula[] = [];  // Inicializar con un arreglo vacío
  @Output() peliculaSeleccionada = new EventEmitter<Pelicula>();

  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada.emit(pelicula);
  }
}