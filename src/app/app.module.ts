import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatTableModule, MatTabsModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileHomeComponent } from './components/profile/profile-home/profile-home.component';
import { ProfileContactComponent } from './components/profile/profile-contact/profile-contact.component';
import { ProfileAboutComponent } from './components/profile/profile-about/profile-about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GithubComponent } from './components/github/github.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ProfileComponent,
    ProductsComponent,
    ProfileHomeComponent,
    ProfileContactComponent,
    ProfileAboutComponent,
    NotFoundComponent,
    GithubComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
