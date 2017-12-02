import { ActivatedRoute } from '@angular/router';
import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Student, Ra, WorkOrder } from '../../domain';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  private id;
  private type;
  private newWorkOrder = new WorkOrder();
  private workOrders : WorkOrder[] = [];
  constructor( private auth: UserAuthenticationService , private activRoute: ActivatedRoute, private http: HttpClient) {
   }

  ngOnInit() {
    this.activRoute.params.subscribe(x => this.loadRoute(x));
  }
  private addWorkOrder() {
    let httpparam= (new HttpParams()).set('description', this.newWorkOrder.description);
    httpparam=httpparam.set('id', this.id)
    this.http.post('http://13.58.69.120/createWorkOrder',httpparam).subscribe(x=> console.log(x));
    this.workOrders.push(this.newWorkOrder);
    this.newWorkOrder = new WorkOrder();
  }
  private loadRoute(data){
    this.id=data.id;
    this.type=data.type;
    if(this.type=='ra'){
      this.http.get(`http://13.58.69.120/${this.id})/getStudentOrders` ).subscribe(x=> this.populate(x))
    }
    this.http.get(`http://13.58.69.120/${this.id})/getOrders` ).subscribe(x=> this.populate(x))
    }
    private populate(orders){
      for(let order of orders){
        var ord:WorkOrder={
          roomNo: order['room'],
          name: `${order['firstname']} ${order['lastname']}`,
          description: order['description']
        }
        this.workOrders.push(ord);
      }
  }
}
