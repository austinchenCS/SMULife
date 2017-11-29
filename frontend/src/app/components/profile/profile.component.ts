import { HttpClient, HttpParams } from '@angular/common/http';
import { UserAuthenticationService } from './../../user-authentication.service';

import { Student, Ra } from './../../domain';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageSrc:string="http://www.smu.edu/-/media/Images/News/2017/fall/dallas-hall-with-skyline-16x9ratio.ashx?h=312&w=554&la=en&hash=97B1B37B25C16526952384875E523FE39B31BB0C";
  imageNme:string="";
  id;
  type;
  student: Student ={};
  file: File;
  edit= false;
  src:string="";
  ra: Ra = {};
  constructor(private auth: UserAuthenticationService , private activRoute: ActivatedRoute, private http:HttpClient) {

   }

  private editSwitch() {
    this.edit=!this.edit;
    if(!this.edit){
      this.updateInfo()
    }
  }
  ngOnInit() {
    this.src="dwwg"
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
  }
  displayPhoto(fileInput) {
    if (fileInput.target.files && fileInput.target.files[0]) {
    const reader = new FileReader();
    this.imageNme = fileInput.target.files[0].name;
    reader.onload = ((e) => {
      this.imageSrc = e.target['result'];
      
    });
  
    reader.readAsDataURL(fileInput.target.files[0]);
    }
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
      lastName: data[0]['lastname'],
      imageUrl: data[0]['picture']

    }
    if(data[0]['picture']!=null){
  
  }
  }
  private updateInfo(){
    let httparams= new HttpParams();
    httparams=httparams.set('email', this.student.email);
    httparams=httparams.set('phone', String(this.student.phoneNum));
    httparams=httparams.set('room', String(this.student.roomNumber));
    httparams=httparams.set('ename', this.student.emergencyContactName);
    httparams=httparams.set('ephone', String(this.student.emergencyContactNumber));
    httparams=httparams.set('erelation', this.student.emergencyContactRelation);
    let httparams2= new HttpParams();
    httparams2= httparams2.set("picture", this.imageSrc);
    
    // let slicedString = this.imageSrc.slice(22);
    // console.log(slicedString);
  this.http.post(`http://13.58.69.120/${this.id}/update`,httparams2, {params: httparams}).subscribe(x => console.log(x))
  }
}
