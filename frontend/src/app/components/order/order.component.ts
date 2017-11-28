import { ActivatedRoute } from '@angular/router';
import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Student, Ra, WorkOrder } from '../../domain';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  private id;
  private type;
  private newWorkOrder = new WorkOrder();
  private workOrders : WorkOrder[];
  constructor( private auth: UserAuthenticationService , private activRoute: ActivatedRoute ) {
   }

  ngOnInit() {
    this.activRoute.params.subscribe(x => this.loadRoute(x));
  }
  private addWorkOrder() {
    this.newWorkOrder.date = new Date(Date.now());
    this.workOrders.push(this.newWorkOrder);
    this.newWorkOrder = new WorkOrder();
  }

  private loadRoute(data){
    this.id=data.id;
    this.type=data.type;
  }
}
