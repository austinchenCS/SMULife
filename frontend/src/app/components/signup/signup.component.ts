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
  private phonenumber: string="";
  private password: string="";
  private passwordconfirm: string="";
  private domrs: string="";
  private roomnumber: string="";
  private isRA: string="";
  private contactname: string="";
  private contactnum: string="";
  private relation: string="";

  constructor() { }

  ngOnInit() {
  }

}
