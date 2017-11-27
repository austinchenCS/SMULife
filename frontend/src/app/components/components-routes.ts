import { AuthGuard } from './../auth.guard';
import { EventsComponent } from './events/events.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ResidentsPageComponent } from './residents-page/residents-page.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from "@angular/router";

export const COMPONENTS_ROUTES : Routes = [
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'residents', component: ResidentsPageComponent, canActivate: [AuthGuard] },
    { path: 'order', component: OrderComponent , canActivate: [AuthGuard]},
    { path: 'events', component: EventsComponent , canActivate: [AuthGuard]},
    { path: 'login', component: FrontpageComponent },
    { path: 'signup', component: SignupComponent }
];