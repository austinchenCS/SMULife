import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  private id;
  private type;
  constructor(private http:HttpClient, private auth: UserAuthenticationService, private activRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activRoute.params.subscribe(x => this.loadRoute(x));
  }

  private loadRoute(data){
    this.id=data.id;
    this.type=data.type;
  }

}
