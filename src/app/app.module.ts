import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//sami importujemo
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ProfileComponent } from './core/profile/profile.component';
import { ContactComponent } from './core/contact/contact.component';
import { CakesComponent } from './cakes/cakes.component';
import { CakeComponent } from './cakes/cake/cake.component';
import { CakePageComponent } from './cakes/cake-page/cake-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ProfileComponent,
    ContactComponent,
    CakesComponent,
    CakeComponent,
    CakePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
