import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResidentsPageComponent } from './components/residents-page/residents-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    FrontpageComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    ResidentsPageComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
