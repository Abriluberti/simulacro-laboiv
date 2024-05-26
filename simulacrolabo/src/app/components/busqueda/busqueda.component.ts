import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Pelicula } from '../../clases/pelicula';
import { AsyncPipe, CommonModule, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';

import { DetallePeliculaComponent } from "../detalle-pelicula/detalle-pelicula.component";
import { TablaPeliculaComponent } from "../tabla-pelicula/tabla-pelicula.component";
import { PeliculasService } from '../../servicios/peliculas.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
    selector: 'app-busqueda',
    standalone: true,
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css'],
    imports: [NgFor, NgIf, NgClass, DatePipe, DetallePeliculaComponent, TablaPeliculaComponent, CommonModule]
})
export class BusquedaComponent implements OnInit {
    peliculas$: Observable<Pelicula[]> = new Observable();  // Inicializar como un Observable vacío
    peliculaSeleccionada: Pelicula | null = null;  // Inicializar con null
  
    constructor(private peliculasService: PeliculasService) { }
  
    ngOnInit(): void {
      this.peliculas$ = this.peliculasService.getPeliculas().pipe(
        catchError(() => of([]))  // En caso de error, retornar un arreglo vacío
      );
    }
  
    mostrarDetalle(pelicula: Pelicula) {
      this.peliculaSeleccionada = pelicula;
    }
  }