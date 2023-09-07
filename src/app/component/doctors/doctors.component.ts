import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  constructor(private _shared:SharedService ,private router:Router){

  }
  doctors:any;
 
    
      ngOnInit(): void {
        this._shared.getdoctor()
        
        
     .subscribe((rep)=>{
          this.doctors=rep;
        })
        console.log(this.doctors);
      }
  
add(){
  this.router.navigate(["/add"])
}
Deletedoctor(id:any){
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this._shared.deletedoctor(id)
  .subscribe((res)=>{
    this.ngOnInit();
  })
  Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'Your Doctor has been deleted.',
    showConfirmButton: false,
    timer: 1500
  })
}})}}
