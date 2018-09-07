import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { ProfileComponent } from '../../components/profile/profile.component';
import { ProfileHomeComponent } from '../../components/profile/profile-home/profile-home.component';
import { ProfileContactComponent } from '../../components/profile/profile-contact/profile-contact.component';
import { ProfileAboutComponent } from '../../components/profile/profile-about/profile-about.component';
import { ProfileComponent } from '../../components/profile/profile.component';


const routes: Routes = [
  // { path: 'user/:id', component: ProfileComponent },
{
  path: '', component: ProfileComponent, children: [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ProfileHomeComponent },
    { path: 'about', component: ProfileAboutComponent},
    { path: 'contact', component: ProfileContactComponent }
  ]
},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // forChild()
  ],
  exports: [
  RouterModule
  ]
})
export class ProfileRouterModule { }
