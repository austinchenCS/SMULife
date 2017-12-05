import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _id;
  private _type;
  @Input()
  public get id(): string {
  return this._id;
}
public set id(value: string) {
  this._id = value;
}
@Input()
public get type(): string {
  return this._type;
}
public set type(value: string) {
  this._type = value;
}
  constructor(private auth: UserAuthenticationService , private activRoute: ActivatedRoute, private router : Router ) { }

private logout(){
  this.auth.setLoggedIn();
  this.router.navigateByUrl('')
}
  ngOnInit() {
  }

}
