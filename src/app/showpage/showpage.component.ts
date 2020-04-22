import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.css']
})
export class ShowpageComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }


  semua="";
  ngOnInit() {
    let id= this.route.snapshot.paramMap.get('id');
    this.semua=id;
  }

}