import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from '../header-nav/header-nav.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';



@NgModule({
  declarations: [HeaderNavComponent,LandingPageComponent],
  imports: [
    SharedModule,
    UserRoutingModule,
  ],
  exports: [HeaderNavComponent,SharedModule,LandingPageComponent]
})
export class UserModule { }
