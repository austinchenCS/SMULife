import { UserAuthenticationService } from './../../user-authentication.service';

import { Student, Ra } from './../../domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private student: Student;
  private file: File;
  private edit= false;
  private src:string="";
  private ra: Ra = {};
  constructor(private auth: UserAuthenticationService ) {

   }

  private editSwitch() {
    this.edit=!this.edit;
  }
  ngOnInit() {
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
}
