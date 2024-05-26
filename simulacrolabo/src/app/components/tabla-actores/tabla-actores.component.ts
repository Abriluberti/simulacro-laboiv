import { Component, EventEmitter, Output } from '@angular/core';
import { ActorService } from '../../servicios/actor.service';
import { Actor } from '../../clases/actor';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-actores',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, DatePipe, FormsModule],
  templateUrl: './tabla-actores.component.html',
  styleUrl: './tabla-actores.component.css'
})export class TablaActoresComponent {

  actors: Actor[] = []; // Utiliza el tipo Actor[] en lugar de any[]
  filteredActors: Actor[] = [];
  
  searchTerm: string = '';
  selectedActor: Actor | null = null; // Utiliza el tipo Actor y permite valores nulos
  listWidth: number = 0;

  @Output() actorsData = new EventEmitter<Actor>(); // Emite instancias de Actor en lugar de any

  constructor(private actorService: ActorService) { } // Inyecta el servicio de actores

  async ngOnInit() {
    this.actorService.getActores().subscribe({
      next: (actors: Actor[]) => {
        this.actors = actors;
        this.filteredActors = actors;
        this.listWidth = actors.length * 320;
      },
      error: (error) => {
        console.error('Error al obtener actores:', error);
        // Maneja el error según sea necesario
      }
    });
  }

  filterActors() {
    this.filteredActors = this.actors.filter(actor =>
      actor.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectActor(actor: Actor) {
    if (this.selectedActor === actor) {
      this.selectedActor = null;
    } else {
      this.selectedActor = actor;
    }
    this.OnSelectCountry();
  }
  
  
  public OnSelectCountry() {
    if (this.selectedActor !== null) {
      this.actorsData.emit(this.selectedActor);
    }
  }
  

 
}