import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

export class CHAT{
  $key:string;
  mensaje:string;
  usuario:string;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  mensaje:string;
  usuario:string;
  constructor(
    private ngFirestore:AngularFirestore,
    private router: Router
  ) { }

  create(mensaje, usuario){
    return this.ngFirestore.collection('chats').add({
      msg: mensaje,
      user:usuario
    });
  }

  getChats(){
    return this.ngFirestore.collection('chats').snapshotChanges();
  }

  getChat(id){
    return this.ngFirestore.collection('chats').doc(id).valueChanges();
  }

  update(id, todo: CHAT){
    this.ngFirestore.collection('chats').doc(id).update(todo)
    .then(()=>{
      this.router.navigate(['/list-chats']);
    }).catch(error=>console.log(error));;
  }

  delete(id:string){
    this.ngFirestore.doc('chats/'+id).delete();
  }
}