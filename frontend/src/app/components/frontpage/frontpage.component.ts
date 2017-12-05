import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  private id: string;
  private password: string;
  
  
  constructor( private http: HttpClient, private auth: UserAuthenticationService, private router: Router) { 
 
  }

  ngOnInit() {
  }
private login(){
  let params = new HttpParams();
  params.set("id", this.id);
  params.set("pass", this.password);
  console.log(params.keys())
  
  this.http.get(`http://13.58.69.120/login?id=${this.id}&pass=${this.password}`).subscribe(data=> this.authenticate(data))
}
private authenticate(data){
  if(data){
console.log(data)
if(data[1]){
  var type=data[1]['type'];

if(type&&(type=="ra"|| type=="student")){
  this.auth.setLoggedIn();
  this.router.navigateByUrl('/'+type+'/'+this.id+'/profile')
}
else(
  alert("not valid login")
)
}
  }
  else(
    alert("not valid login")
  )
}
}
