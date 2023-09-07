import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { DoctorsComponent } from './component/doctors/doctors.component';
import { PatinetsComponent } from './component/patinets/patinets.component';
import { BookingComponent } from './component/booking/booking.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddDoctorComponent } from './component/add-doctor/add-doctor.component';
import { UpdateComponent } from './component/update/update.component';
import { UpdoctorComponent } from './component/updoctor/updoctor.component';


@NgModule({
  declarations:[
    AppComponent,
    NavbarComponent,
    AboutComponent,
    DoctorsComponent,
    PatinetsComponent,
    BookingComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    NotfoundComponent,
    AddDoctorComponent,
    UpdateComponent,
    UpdoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
