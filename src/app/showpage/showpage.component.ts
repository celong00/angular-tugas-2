import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.css']
})

export class ShowpageComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  penjelasan='';
  semua=[];
  total=[];
  cek=0;
  hiya="hiya";


  ngOnInit() {
    let id= this.route.snapshot.paramMap.get('id');
    if(id=='0'){
      let namajur=this.route.snapshot.paramMap.get('nama');
      let penjelasan= this.route.snapshot.paramMap.get('penjelasan');
      this.semua.push(namajur);
      this.semua.push(penjelasan);
      this.cek=this.semua.length;
      this.hiya+=this.hiya;
    }
    else{
      this.total=this.semua;
    }
  }

}