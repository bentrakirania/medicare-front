import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patinets',
  templateUrl: './patinets.component.html',
  styleUrls: ['./patinets.component.css']
})
export class PatinetsComponent implements OnInit {
  patients:any=[]
  constructor(public _shared:SharedService,private router:Router){}
ngOnInit(): void {
  this._shared.getpatient()
      
      
.subscribe((rep)=>{
     this.patients=rep;
   })
   
 }
 Deletepatient(id:any){
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this._shared.deletepatient(id)
  .subscribe((res)=>{
    this.ngOnInit();
  })
  Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'Your Patient has been deleted.',
    showConfirmButton: false,
    timer: 1500
  })
       
        
        
      
      
    }
  })

 }}