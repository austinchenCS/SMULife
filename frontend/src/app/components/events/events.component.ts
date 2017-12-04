import { HttpParams } from '@angular/common/http';
import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../domain';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router/';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private events: Event[];
  private event: Event ={
  };
  private id;
  private type;
  private imageSrc:string="http://www.smu.edu/-/media/Images/News/2017/fall/dallas-hall-with-skyline-16x9ratio.ashx?h=312&w=554&la=en&hash=97B1B37B25C16526952384875E523FE39B31BB0C";
  
  constructor(private http:HttpClient, private auth: UserAuthenticationService, private activRoute: ActivatedRoute) { 
   this.events=[
     
   ]
  }

  ngOnInit() {
    this.activRoute.params.subscribe(x => this.loadRoute(x));
    this.http.get('http://13.58.69.120/get_calendar').subscribe(data => this.onEventLoad(data) )
  }

  private onEventLoad(events){
    for(let event of events){
      var temp: Event={
        description: event['description'],
        eventName: event['eventname'],
        image: event['picurl']
      }
      this.events.push(temp)
    }
  }
  displayPhoto(fileInput) {
    if (fileInput.target.files && fileInput.target.files[0]) {
    const reader = new FileReader();
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

  private addEvent(){
    let httparams= new HttpParams()
    httparams=httparams.set('name', this.event.eventName);
    httparams=httparams.set('id', String(this.id));
    httparams=httparams.set('description', String(this.event.description));
    httparams=httparams.set('picture', this.imageSrc.split(',',2)[1]);
    this.http.post("http://13.58.69.120/createEvent", httparams).subscribe(x=> console.log(x))

    this.events.push(this.event);
    this.event=new Event();
  }

}
