import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Actor } from '../clases/actor';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private actoresCollection = this.firestore.collection<Actor>('actores');

  constructor(private firestore: AngularFirestore) {}

  addActor(actor: any): Promise<void> {
    // Utiliza add() en lugar de set() para agregar el actor y devuelve la Promise<void>
    return this.actoresCollection.add(actor)
      .then(() => {
        console.log('Actor agregado correctamente');
      })
      .catch(error => {
        console.error('Error al agregar actor:', error);
        throw error; // Asegúrate de propagar el error para que pueda ser manejado en el componente
      });
  }
  
  getActores(): Observable<Actor[]> {
    return this.actoresCollection.valueChanges({ idField: 'id' });
  }
}
