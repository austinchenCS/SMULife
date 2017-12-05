import { HttpParams } from '@angular/common/http';
import { Dorm } from './../../domain/models/dorm';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 private enteredPhrase: string="";
  private raPass: string = "residents are life"
  private id: string="";
  private email: string="";
  private firstname: string="";
  private lastname: string="";
  private phonenumber: string="";
  private password: string="";
  private passwordconfirm: string="";
  private dorm: string="";
  private roomnumber: string="";
  private isRA: string="";
  private contactname: string="";
  private contactnum: string="";
  private relation: string="";
  private dorms:Dorm[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.isRA = "student"
    this.dorms = [
      { id: 1, name: 'Armstrong' },
      { id: 2, name: 'Boaz' },
      { id: 3, name: 'Cockrell-McIntosh' },
      { id: 4, name: 'Crum' },
      { id: 5, name: 'Kathy Crow' },
      { id: 6, name: 'Loyd' },
      { id: 7, name: 'Mary Hay' },
      { id: 8, name: 'Peyton' },
      { id: 9, name: 'Shuttles' },
      { id: 10, name: 'McElvaney' },
      { id: 11, name: 'Morrison-McGinnis' },
      { id: 12, name: 'Virginia-Snider' },
      { id: 13, name: 'Ware' }
    ]
  }
private signUp(){
  console.log("Hello");
  console.log(this.isRA);
  console.log(typeof this.isRA);
  console.log(this.isRA=="Student");
  console.log(this.isRA=="RA");
  console.log(String(this.isRA=="RA"));
  console.log("We are here");

  var isRaString = "";

  if (this.isRA=="RA") {
    isRaString = "1";
  }
  
  let urlSearchParams = new HttpParams();
  urlSearchParams = urlSearchParams.set('isra', isRaString);
  urlSearchParams = urlSearchParams.set('firstname', this.firstname);
  urlSearchParams = urlSearchParams.set('lastname', this.lastname);
  urlSearchParams = urlSearchParams.set('email', this.email);
  urlSearchParams = urlSearchParams.set('pass', this.password);
  urlSearchParams = urlSearchParams.set('phone', this.phonenumber);
  urlSearchParams = urlSearchParams.set('id', this.id);
  urlSearchParams = urlSearchParams.set('dorm', this.dorm.toLowerCase());
  urlSearchParams = urlSearchParams.set('room', this.roomnumber);
  urlSearchParams =  urlSearchParams.set('ename', this.contactname);
  urlSearchParams =  urlSearchParams.set('erelation', this.relation);
  urlSearchParams = urlSearchParams.set('ephone', this.contactnum);
  this.http.post("http://13.58.69.120/signup", urlSearchParams).subscribe(data=> this.isSuccess(data))
  
}
private isSuccess(status){
  console.log(status[0]['success']);
  
  if(status[0]['success']==true){
    alert("Signup successful! Please return to homepage and log in.")
  }
  else{
    alert("Error, an account already exists under the provided SMU ID.")
  }
}
}
