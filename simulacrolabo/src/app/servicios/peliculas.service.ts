import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../clases/pelicula';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private peliculasCollection = this.firestore.collection<Pelicula>('peliculas');

  constructor(private firestore: AngularFirestore) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.peliculasCollection.valueChanges({ idField: 'id' });
  }

  addPelicula(pelicula: Pelicula): Promise<void> {
    const id = this.firestore.createId();
    pelicula.id = id;
    return this.peliculasCollection.doc(id).set(pelicula);
  }
}
