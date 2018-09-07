import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRouterModule } from '../profile-router/profile-router.module';
import { FormsModule } from '@angular/forms';
import { ProfileHomeComponent } from '../../components/profile/profile-home/profile-home.component';
import { ProfileContactComponent } from '../../components/profile/profile-contact/profile-contact.component';
import { ProfileAboutComponent } from '../../components/profile/profile-about/profile-about.component';
import { MatInputModule, MatTabsModule } from '@angular/material';
import { ProfileComponent } from '../../components/profile/profile.component';


@NgModule({
  imports: [
    CommonModule
    , FormsModule,
    ProfileRouterModule,
    MatInputModule,
    MatTabsModule
  ],
  declarations: [
    ProfileComponent,
    ProfileHomeComponent,
    ProfileAboutComponent,
    ProfileContactComponent
  ]
})
export class ProfileModule { }
