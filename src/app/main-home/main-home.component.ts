import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
 iscoursedisplay =  false ; isstudentdisplayed =  false;
  constructor() { }
  
  addcourse(){
    console.log('showcourse');
    this.iscoursedisplay = true
  }
  addstudent(){
    this.isstudentdisplayed = true
  }

  chide(){
    this.iscoursedisplay = false;
  }
  shide(){
    this.isstudentdisplayed = false;
  }


  ngOnInit(): void {
  }

}
