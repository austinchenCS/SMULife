import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private id: string="";
  private email: string="";
  private firstname: string="";
  private lastname: string="";
  private phoneNumber: string="";
  private password: string="";
  private confirmPassword: string="";
  private residentialCommons: string="";
  private roomNumber: string="";
  private isRA: string="";
  private emergencyContactName: string="";
  private emergencyContactNumber: string="";
  private emergencyContactRelation: string="";

  constructor() { }

  ngOnInit() {
  }

}
