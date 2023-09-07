import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Patient:any;
  id:any;
  constructor(private _shared:SharedService, private actRoute:ActivatedRoute,private router:Router){
  }
  ngOnInit(): void {
    this.id=this.actRoute.snapshot.paramMap.get('id');
    this._shared.getpatientbyid(this.id)
    .subscribe((res)=>{
      this.Patient=res;
      console.log(this.Patient);
      
    })
  }
  Updatepatient(){
    
  this._shared.updatepatient(this.id,this.Patient).subscribe((res)=>{
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'patient updated',
      showConfirmButton: false,
      timer: 1500
    })
   this.router.navigate(['/patients']);
  })
  }
}

