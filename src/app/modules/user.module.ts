import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { HeaderNavComponent } from '../components/header-nav/header-nav.component';
import { FooterLandComponent } from '../components/footer-land/footer-land.component';



@NgModule({
  declarations: [HeaderNavComponent,LandingPageComponent,FooterLandComponent],
  imports: [
    SharedModule,
    UserRoutingModule,
  ],
  exports: [HeaderNavComponent,SharedModule,LandingPageComponent]
})
export class UserModule { }
