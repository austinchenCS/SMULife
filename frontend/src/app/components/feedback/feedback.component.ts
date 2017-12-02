import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from '../../domain';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  private id;
  private type;
  private raid;
  private newFeedback = new Feedback();
  public feedbacks : Feedback[] = [];
  constructor(private http:HttpClient, private auth: UserAuthenticationService, private activRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activRoute.params.subscribe(x => this.loadRoute(x));
  }
  private addFeedback() {

    let httpparams=new HttpParams()
    httpparams=httpparams.set('id', this.raid)
    httpparams=httpparams.set('feedback', this.newFeedback.comments)
    this.http.post('http://13.58.69.120/feedback',httpparams).subscribe(x=> console.log(x));

    this.newFeedback = new Feedback();
  }
  private loadRoute(data){
    this.id=data.id;
    this.type=data.type;
    if(this.type=='ra'){
      this.http.get(`http://13.58.69.120/${this.id}/feedback`).subscribe(x => this.populate(x))
    }
    else{
      this.http.get(`http://13.58.69.120/${this.id}/current_ra`).subscribe(x => this.raid=x[0]['id'])
    }
  }

  private populate(data){
    for(let feedback of data){
       var feed: Feedback={
         comments: feedback['feedback']
       }
       this.feedbacks.push(feed)
    }
  }

}
