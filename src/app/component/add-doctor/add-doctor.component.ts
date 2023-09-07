import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  constructor(public _shared:SharedService , private router:Router){
 }
ngOnInit(): void {

}
doctor={
  firstname:'',
  familyname:'' ,
  speciality:'' ,
  id:'',
  phone:'',
  }
file:any;
selectfile(e:any){
  console.log(e);  
 this.file=e.target.files[0];
 console.log(this.file);
}
createdoctor(){
  let newform =  new FormData();
  newform.append('firstname',this.doctor.firstname);
  newform.append('familyname',this.doctor.familyname);
  newform.append('speciality',this.doctor.speciality);
  newform.append('id',this.doctor.id.toString());
  newform.append('phone',this.doctor.phone.toString());
  newform.append('image',this.file);
  this._shared.create(newform)
  .subscribe((rep)=>{
  
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Doctor added successfully ',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(["/doctors"])
  },err=>{
    console.log(err);
    
  })
  
}
}
