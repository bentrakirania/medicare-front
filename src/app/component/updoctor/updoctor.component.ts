import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updoctor',
  templateUrl: './updoctor.component.html',
  styleUrls: ['./updoctor.component.css']
})
export class UpdoctorComponent implements OnInit {
  constructor(public _shared:SharedService, private router:Router,private actRoute:ActivatedRoute){

  }
  id:any;
  doctor:any;

  ngOnInit(): void {
    this.id=this.actRoute.snapshot.paramMap.get('id');
    this._shared.getdoctorbyid(this.id)
    .subscribe((res)=>{
      this.doctor=res;
      console.log(this.doctor);
      
    })
  }
  Updatedoctor(){
    
    this._shared.updatedoctor(this.id,this.doctor).subscribe((res)=>{
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'doctor updated',
        showConfirmButton: false,
        timer: 1500
      })
     this.router.navigate(['/doctors']);
    })
    }

}
