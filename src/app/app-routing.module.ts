import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './component/doctors/doctors.component';
import { PatinetsComponent } from './component/patinets/patinets.component';
import { BookingComponent } from './component/booking/booking.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AddDoctorComponent } from './component/add-doctor/add-doctor.component';
import { UpdateComponent } from './component/update/update.component';
import { UpdoctorComponent } from './component/updoctor/updoctor.component';

const routes: Routes = [ 
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'add',component:AddDoctorComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'updoctor/:id',component:UpdoctorComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'patients',component:PatinetsComponent},
  {path:'booking',component:BookingComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
