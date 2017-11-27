import { AuthGuard } from './auth.guard';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { FooterComponent } from './components/footer/footer.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components';
import { UserAuthenticationService } from './user-authentication.service';

 
const defaultRoute = 'login';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
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
  providers: [UserAuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
