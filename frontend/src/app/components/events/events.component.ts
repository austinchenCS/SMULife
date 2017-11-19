import { Component, OnInit } from '@angular/core';
import { Event } from '../../domain';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private events: Event[]
  constructor() { 
   this.events=[
     {
       eventName: "HomeComing",
       description: "best day ever!!!"
     },
     {
      eventName: "finals",
      description: "worst day ever!!!"
    },
    {
      eventName: "HomeComing",
      description: "best day ever!!!"
    },
    {
     eventName: "finals",
     description: "worst day ever!!!"
   },
   {
    eventName: "HomeComing",
    description: "best day ever!!!"
  },
  {
   eventName: "finals",
   description: "worst day ever!!!"
 }
   ]
  }

  ngOnInit() {
  }

}
