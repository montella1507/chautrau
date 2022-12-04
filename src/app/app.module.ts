import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
   RouterModule.forRoot([
     {
       path: "cars",
       loadChildren: ()=> import("./data/data.module").then(x=> x.DataModule.configure({
         name: "cars"
       }).ngModule as any)
     },
     {
       path: '',
       redirectTo: "cars",
       pathMatch: "full"
     }
   ])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
