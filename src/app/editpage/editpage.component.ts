import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobSerService } from '../glob-ser.service'
@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  constructor(private route : ActivatedRoute,public variabelglobal:GlobSerService) { 

  }
  name = 'Angular';
  nama="";
  penjelasan="";
  cek:any;
  datadariglob:any;
  datahtml:String;
  datatambah:any;
  datatemp:any;
  datake=0;
  adatidak=false;

  edit(){
     this.datadariglob=this.variabelglobal.getData(this.datadariglob);

     for (var i=0;i<this.datadariglob.length;i++){
      this.cek=this.datadariglob[i].nama;
      if(this.cek==this.nama){
        this.datake=i;
        this.adatidak=true;
        break;
      }
     }
     if(this.adatidak==true){
       this.variabelglobal.editData(this.datake,this.penjelasan);
       alert("Edit Data Berhasil");
     }else{
       alert("Edit Data Gagal Karena Nama Jurusan Tidak di Temukan");
     }
     


  }

  ngOnInit() {
  }

}