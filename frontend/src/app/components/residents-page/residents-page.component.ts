import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Student, Ra } from '../../domain';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-residents-page',
  templateUrl: './residents-page.component.html',
  styleUrls: ['./residents-page.component.css']
})
export class ResidentsPageComponent implements OnInit {
  private ra : Ra;
  private id: string;
  private type;
  private residents : Student[];
  private testStudent : Student;


  constructor(private auth: UserAuthenticationService , private http:HttpClient, private activRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activRoute.params.subscribe(x => this.loadRoute(x));
    this.type="ra";
    this.residents = [
      
    ]
    
  }

  private loadRoute(data){
    this.id=data.id;
    this.http.get(`http://13.58.69.120/${this.id}/get_residents`).subscribe(data => this.populateResidents(data))
  }
  private populateResidents(data){
    for (let resident of data) {

      var tempResident: Student={
        firstName: resident['firstname'],
        lastName: resident['lastname'],
        email: resident['email'],
        phoneNum: resident['phone'],
        roomNumber: resident['room']
      }

      this.residents.push(tempResident)
    }
    
  }
}
