
import { Student, Ra } from './../../domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private student: Student;
  private edit= false;
  private ra: Ra = {};
  constructor() {

   }

  private editSwitch() {
    this.edit=!this.edit;
  }
  ngOnInit() {
  }

}
