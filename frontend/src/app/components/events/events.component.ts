import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../domain';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private events: Event[]
  constructor(private http:HttpClient, private auth: UserAuthenticationService) { 
   this.events=[
     {
       eventName: "Home Coming",
       description: "Lorem ipsum dolor sit amet, est dolorum officiis apeirian ne, duo graecis apeirian ex."
     },
     {
      eventName: "Finals",
      description: "Lorem ipsum dolor sit amet, est dolorum officiis apeirian ne, duo graecis apeirian ex."
    },
    {
      eventName: "Spring Break",
      description: "Lorem ipsum dolor sit amet, est dolorum officiis apeirian ne, duo graecis apeirian ex."
    },
    {
     eventName: "Finals Again",
     description: "Lorem ipsum dolor sit amet, est dolorum officiis apeirian ne, duo graecis apeirian ex."
   },
   {
    eventName: "Commencement",
    description: "Lorem ipsum dolor sit amet, est dolorum officiis apeirian ne, duo graecis apeirian ex."
  },
  {
   eventName: "Unpacking",
   description: "Lorem ipsum dolor sit amet, est dolorum officiis apeirian ne, duo graecis apeirian ex."
 }
   ]
  }

  ngOnInit() {
    this.http.get('http://13.58.69.120/get_calendar').subscribe(data => this.onEventLoad(data) )
  }

  private onEventLoad(events){
    for(let event of events){
      var temp: Event={
        description: event['description'],
        eventName: event['eventname']
      }
      this.events.push(temp)
    }
  }

}
