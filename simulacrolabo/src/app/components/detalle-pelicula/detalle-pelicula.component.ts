import { Component, Input } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export class DetallePeliculaComponent {
  @Input() pelicula: Pelicula | null = null;  // Inicializar con null
}