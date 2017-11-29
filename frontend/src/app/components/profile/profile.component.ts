import { HttpClient } from '@angular/common/http';
import { UserAuthenticationService } from './../../user-authentication.service';

import { Student, Ra } from './../../domain';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private id;
  private type;
  private student: Student ={};
  private file: File;
  private edit= false;
  private src:string="";
  private ra: Ra = {};
  constructor(private auth: UserAuthenticationService , private activRoute: ActivatedRoute, private http:HttpClient) {

   }

  private editSwitch() {
    this.edit=!this.edit;
  }
  ngOnInit() {
    this.activRoute.params.subscribe(x => this.loadRoute(x));
  }
  onChange(event) {
     this.file = event.srcElement.files[0];
     const reader = new FileReader();
     reader.readAsDataURL(this.file);
     reader.onload = this.changesrc.bind(this)
  }
  private changesrc(result: any){
      this.src=result.target.result;
      console.log(this.src)
  }

  private loadRoute(data){
    this.id=data.id;
    this.type=data.type;
    this.http.get(`http://13.58.69.120/${this.id}/info`).subscribe(x=> this.profileInfo(x))
  }
  private profileInfo(data){
    this.student={
      phoneNum:data[0]['phone'],
      email:data[0]['email'],
      roomNumber:data[0]['room'],
      emergencyContactName: data[0]['ename'],
      emergencyContactNumber: data[0]['ephone'],
      emergencyContactRelation: data[0]['erelation'],
      firstName: data[0]['firstname'],
      lastName: data[0]['lastname']
    }
  }
}
