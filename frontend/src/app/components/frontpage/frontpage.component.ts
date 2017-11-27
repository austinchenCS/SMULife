import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  private id: string;
  private password: string;
  
  
  constructor( private http: HttpClient, private auth: UserAuthenticationService ) { 
 
  }

  ngOnInit() {
  }
private login(){
  if(this.id=="87654321" && this.password=="pass" ){
    this.auth.setLoggedIn();
  }
}
}
