import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { CrudService } from './../services/crud.service';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';


export class CHAT{
  $key:string;
  userName:string;
  mensaje:string;
}

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.page.html',
  styleUrls: ['./list-chat.page.scss'],
})
export class ListChatPage implements OnInit {
 
  messages = [];

  userName: string = "";
  message: string = "";
  

  constructor(private fAuth: AuthenticationService,private db: AngularFireDatabase,
    private crudService: CrudService,public formBuilder: FormBuilder) {  }

  ngOnInit() {
     
    this.fAuth.userDetails().subscribe(user => {
      this.userName = user.email;
    });

    this.crudService.getChats().subscribe((res) => {
      this.messages = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as CHAT
        };
      })
    });

  }

  getMessages(){
    this.crudService.getChats()
    .subscribe((data) => {
      console.log(data)
    })
  }


  sendMessage(){
    
    this.fAuth.userDetails().subscribe(user => {
      this.userName = user.email;
      this.crudService.create(this.message, this.userName)
    });    
  }

}
