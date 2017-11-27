import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private auth: UserAuthenticationService ) { }

  ngOnInit() {
  }

}
