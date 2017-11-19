import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
/*
  constructor( private http: HttpClient ) { 
    this.http.get('http://13.58.69.120/RAfeedback?ra_id=12345678').subscribe(data => {
      // Read the result field from the JSON response.
      var random = data;
      console.log(random);
    });
  }
*/
  ngOnInit() {
  }

}
