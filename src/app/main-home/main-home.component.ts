import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
 iscoursedisplay =  false ; isstudentdisplayed =  false;
 coursearray : Array<String> = [];
 studentarray : Array<String> = [];
 courseName;
 studentName;
 studentDname : String ;
 courseDname : String;

  constructor() { }
  
  addcourse(){
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

  addcourselist(){
    this.courseDname = this.courseName
    this.coursearray.push(this.courseDname);
    console.log(this.coursearray);
    this.courseName = ' ';
    this.chide();
  }

  addstudentlist(){
    this.studentDname = this.studentName
    this.studentarray.push(this.studentDname);
    console.log(this.studentarray);
    this.studentName = ' ';
    this.shide();
  }


  ngOnInit(): void {
  }

}
