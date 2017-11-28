import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Student, Ra } from '../../domain';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residents-page',
  templateUrl: './residents-page.component.html',
  styleUrls: ['./residents-page.component.css']
})
export class ResidentsPageComponent implements OnInit {
  private ra : Ra;
  private id;
  private type;
  private residents : Student[];
  private testStudent : Student;
  constructor(private auth: UserAuthenticationService , private activRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activRoute.params.subscribe(x => this.loadRoute(x));
    this.type="ra";
    this.residents = [
      
    ]
  }

  private loadRoute(data){
    this.id=data.id;
  }
}
