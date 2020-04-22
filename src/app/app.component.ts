import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  nama="";
  penjelasan="";
  cek="";
  jurusan=[];
  constructor(private router : Router){

  }
  showpage(){
    this.router.navigate(['/showpage']);
  }
  editpage(){
    this.router.navigate(['/editpage'])
  }
  input(){

    this.jurusan.push(this.nama);
    this.jurusan.push(this.penjelasan);
  }
  show(){

  }

  



}
