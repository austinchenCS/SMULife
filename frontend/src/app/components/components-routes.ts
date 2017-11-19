import { EventsComponent } from './events/events.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ResidentsPageComponent } from './residents-page/residents-page.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from "@angular/router";

export const COMPONENTS_ROUTES : Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'residents', component: ResidentsPageComponent },
    { path: 'frontpage', component: FrontpageComponent },
    { path: 'order', component: OrderComponent },
    { path: 'events', component: EventsComponent},
    { path: 'login', component: FrontpageComponent },
    { path: 'signup', component: SignupComponent }
];