import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components';


const defaultRoute = 'profile';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ComponentsModule,    
    RouterModule.forRoot([
      { path: '', redirectTo: defaultRoute, pathMatch: 'full' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
