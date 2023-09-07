import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(public _shared:SharedService,private router:Router){

  }
  ngOnInit(): void {
    
  }
  
  NewUser={
      username:'',
      email:'',
      password:''
    }
    signup(){
      this._shared. signup(this.NewUser)
      .subscribe((rep)=>{
        console.log(rep,this. NewUser);
        this. NewUser={
          username:'',
          email:'',
          password:''
        }
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'user has been added',
          showConfirmButton: false,
          timer: 1800
        })
        
        this.router.navigate(["/sign-in"])
      
      },err=>{
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'This email address is already in use',
          showConfirmButton: false,
          timer: 1800
        })
        
      })
    }
  }
    

