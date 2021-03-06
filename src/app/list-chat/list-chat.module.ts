import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListChatPageRoutingModule } from './list-chat-routing.module';

import { ListChatPage } from './list-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListChatPageRoutingModule
  ],
  declarations: [ListChatPage]
})
export class ListChatPageModule {}
