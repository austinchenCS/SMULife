import { AuthGuard } from './../auth.guard';
import { EventsComponent } from './events/events.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ResidentsPageComponent } from './residents-page/residents-page.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from "@angular/router";
import { FeedbackComponent } from './feedback/feedback.component'

export const COMPONENTS_ROUTES : Routes = [
    { path: ':type/:id/profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'ra/:id/residents', component: ResidentsPageComponent, canActivate: [AuthGuard] },
    { path: ':type/:id/order', component: OrderComponent , canActivate: [AuthGuard]},
    { path: ':type/:id/events', component: EventsComponent , canActivate: [AuthGuard]},
    { path: 'login', component: FrontpageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'feedback', component: FeedbackComponent }
];