import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private paisesCollection = this.firestore.collection('paises');

  constructor(private firestore: AngularFirestore) {}

  getPaises(): Observable<any[]> {
    return this.paisesCollection.valueChanges();
  }
}
