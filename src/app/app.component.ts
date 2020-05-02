import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobSerService } from './glob-ser.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  nama="";
  penjelasan="";
  cek:any;
  datadariglob:any;
  datahtml:String;
  datatambah:any;
  datatemp:any;
  constructor(private router : Router,public variabelglobal:GlobSerService){
     this.datadariglob=this.variabelglobal.getData(this.datadariglob);
    this.datatemp=this.datadariglob;
    console.log(this.datadariglob);
  }
  showpage(){
    this.router.navigate(['/showpage',1,this.nama,this.penjelasan]);
  }
  editpage(){
    this.router.navigate(['/editpage'])
     this.datadariglob=this.variabelglobal.getData(this.datadariglob);

     for (var i=0;i<this.datadariglob.length;i++){
       this.cek=this.datadariglob[0].nama;

        break;
     }

  }
  input(){
    this.datatambah={
        nama:this.nama,
        penjelasan:this.penjelasan
    }
    this.datatemp.push(this.datatambah);
    
    this.variabelglobal.setData(this.datatemp);
    
    this.datadariglob=this.variabelglobal.getData();
    this.nama="";
    this.penjelasan="";
    alert("Input berhasil")
  }


  



}
