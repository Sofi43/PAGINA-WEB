import { Injectable } from '@angular/core';
import firebase from "firebase";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MochilasService {

  constructor(private db: AngularFirestore){}

  crear(data: any): Promise<any>{
    return this.db.collection("mochilas").add(data);
  }

  get(): Observable<any>{
    return this.db.collection('mochilas', ref => ref.orderBy('id','desc'))
      .snapshotChanges();
  }

  getDocument(id: string){
    return this.db.collection('mochilas').doc(id).valueChanges();
  }

  getLast(){
   return this.db.collection<History>('mochilas', ref => ref.orderBy('id', 'desc')
     .limit(1))
     .valueChanges();
  }

  delete(id: string){
    return this.db.collection('mochilas').doc(id).delete();
  }

  update(id: string, data: any){
    return this.db.collection('mochilas').doc(id).update(data);
  }
}
