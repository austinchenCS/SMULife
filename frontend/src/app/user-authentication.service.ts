import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthenticationService {
  private isLoggedIn;
  constructor() { 
    this.isLoggedIn = false;
  }
setLoggedIn(){
  this.isLoggedIn=!this.isLoggedIn;
}

getLoggedIn(){
  return this.isLoggedIn;
}

}
