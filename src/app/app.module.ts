import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ShowpageComponent } from './showpage/showpage.component';
import { EditpageComponent } from './editpage/editpage.component';
import { Routes, RouterModule } from '@angular/router';
import { GlobSerService } from './glob-ser.service';


const ROUTES:Routes=[
  { path:'showpage', component : ShowpageComponent},
     { path:'editpage', component : EditpageComponent},
     { path:'showpage/:id/:nama/:penjelasan', component : ShowpageComponent}
     
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent,ShowpageComponent, EditpageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobSerService]
})
export class AppModule { }
