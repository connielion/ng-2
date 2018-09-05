import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { UsersComponent } from '../../components/users/users.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ProfileHomeComponent } from '../../components/profile/profile-home/profile-home.component';
import { ProfileContactComponent } from '../../components/profile/profile-contact/profile-contact.component';
import { ProfileAboutComponent } from '../../components/profile/profile-about/profile-about.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'users', component: UsersComponent},

  { path: 'user/:id', component: ProfileComponent,
    // ng g c components/profile/profileHome + profileContact + profileAbout
    children: [
      { path: 'home', component: ProfileHomeComponent},
      { path: 'contact', component: ProfileContactComponent },
      { path: 'contact', component: ProfileAboutComponent }
    ]
  },

  { path: 'products', component: ProductsComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
