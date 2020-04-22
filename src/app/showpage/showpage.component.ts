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
  ngOnInit() {
    let nama= this.route.snapshot.paramMap.get('id');
     let penjelasan= this.route.snapshot.paramMap.get('new');
    this.semua.push(nama);
    this.semua.push(penjelasan);
  }

}