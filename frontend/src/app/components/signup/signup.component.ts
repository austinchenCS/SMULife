import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from './../../user-authentication.service';
import { Dorm } from '../../domain/models/dorms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  private dorms: Dorm[];
  
  constructor() { }

  ngOnInit() {
    this.dorms = [
      { id: 1, name: 'Armstrong' },
      { id: 2, name: 'Boaz' },
      { id: 3, name: 'Cockrell-McIntosh' },
      { id: 4, name: 'Crum' },
      { id: 5, name: 'Kathy Crow' },
      { id: 6, name: 'Loyd' },
      { id: 7, name: 'Mary Hay' },
      { id: 8, name: 'Peyton' },
      { id: 9, name: 'Shuttles' },
      { id: 10, name: 'McElvaney' },
      { id: 11, name: 'Morrison-McGinnis' },
      { id: 12, name: 'Virginia-Snider' },
      { id: 13, name: 'Ware' }
    ]
  }

}
