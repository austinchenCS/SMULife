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
  private imageSrc:string="http://www.smu.edu/-/media/Images/News/2017/fall/dallas-hall-with-skyline-16x9ratio.ashx?h=312&w=554&la=en&hash=97B1B37B25C16526952384875E523FE39B31BB0C";
  private imageNme:string="";
  private id;
  private type;
  private student: Student;
  private file: File;
  private edit= false;
  private src:string="";
  private ra: Ra = {};
  constructor(private auth: UserAuthenticationService , private activRoute: ActivatedRoute ) {

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
  }
}
