import { ResidentsPageComponent } from './residents-page/residents-page.component';
import { ProfileComponent } from './profile/profile.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DomainModule } from '../domain';
import { COMPONENTS_ROUTES } from './components-routes';
import { OrderComponent } from './order/order.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DomainModule,
        RouterModule.forChild(COMPONENTS_ROUTES)
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        FrontpageComponent,
        ProfileComponent,
        ResidentsPageComponent,
        OrderComponent
    ],
    exports: [
    ]
})
export class ComponentsModule {

}