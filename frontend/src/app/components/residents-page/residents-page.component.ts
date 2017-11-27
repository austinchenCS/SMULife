import { UserAuthenticationService } from './../../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Student, Ra } from '../../domain';

@Component({
  selector: 'app-residents-page',
  templateUrl: './residents-page.component.html',
  styleUrls: ['./residents-page.component.css']
})
export class ResidentsPageComponent implements OnInit {
  private ra : Ra;
  private residents : Student[];
  private testStudent : Student;
  constructor(private auth: UserAuthenticationService ) { }

  ngOnInit() {
    this.residents = [
      
    ]
  }

}
