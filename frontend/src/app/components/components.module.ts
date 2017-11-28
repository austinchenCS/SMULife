import { ResidentsPageComponent } from './residents-page/residents-page.component';
import { ProfileComponent } from './profile/profile.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DomainModule } from '../domain';
import { COMPONENTS_ROUTES } from './components-routes';
import { OrderComponent } from './order/order.component';
import { EventsComponent } from './events/events.component';
import { SignupComponent } from './signup/signup.component';
import { FeedbackComponent } from './feedback/feedback.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DomainModule,
        RouterModule.forChild(COMPONENTS_ROUTES)
    ],
    declarations: [
        HeaderComponent,
        FrontpageComponent,
        ProfileComponent,
        ResidentsPageComponent,
        OrderComponent,
        EventsComponent,
        SignupComponent,
        FeedbackComponent
    ],
    exports: [
    ]
})
export class ComponentsModule {

}