import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  constructor(public _shared:SharedService,private router:Router){

  }
  ngOnInit(): void {
    
  }
  Patient={
  firstname: '',
  familyname:'' ,
  email:'' ,
  phone:Number,
  age:Number,
  date:'' 
  }
  savepatient(){
    this._shared.addpatient(this.Patient)
    .subscribe((rep)=>{
      console.log(rep,this.Patient);
      this.Patient={
        firstname: '',
        familyname:'' ,
        email:'' ,
        phone:Number,
        age:Number,
        date:'' 
      }
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Appointment added successfully ',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/patients"])
    
    },err=>{
      console.log(err);
      
    })
  }
   
  }
