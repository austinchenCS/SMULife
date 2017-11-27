import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../domain';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private events: Event[]
  constructor( private auth: UserAuthenticationService) { 
   this.events=[
     {
       eventName: "Homecoming",
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
  }

}
