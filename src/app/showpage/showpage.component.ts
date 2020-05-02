import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobSerService } from '../glob-ser.service'
@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.css']
})

export class ShowpageComponent implements OnInit {
  datadariglob:any;
  datahtml:String;
  datatemp:any;
  constructor(private route : ActivatedRoute,public variabelglobal:GlobSerService){
     this.datadariglob=this.variabelglobal.getData(this.datadariglob);
    this.datatemp=this.datadariglob;
    console.log(this.datadariglob);
  }
  penjelasan='';
  semua=[];
  total=[];
  cek=0;
  hiya="hiya";


  ngOnInit() {
    
  }

}