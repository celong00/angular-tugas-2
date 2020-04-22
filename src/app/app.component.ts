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
  baru=[];
  constructor(private router : Router){

  }
  showpage(){
    this.router.navigate(['/showpage',1,this.nama,this.penjelasan]);
  }
  editpage(){
    this.router.navigate(['/editpage'])
  }
  input(){
    this.jurusan.push(this.nama);
    this.jurusan.push(this.penjelasan);
  }
  show(){
    this.baru=this.jurusan;
  }

  



}
