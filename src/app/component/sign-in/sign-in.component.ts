import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  implements OnInit {
constructor(public _shared:SharedService,private router:Router){
}
  ngOnInit(): void {
    
  }
  User={
    email:'',
    password:''
  }
  users :any[]=[];
  signin(){
    this._shared.login(this.User)
    .subscribe((rep)=>{
      console.log(rep,this.User);
      this.User={
        email:'',
        password:''
      }
      
      this.router.navigate(["/home"])
    
    },err=>{
      console.log(err);
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Incorrect Email address or Password',
        showConfirmButton: false,
        timer: 1800
      })
    })
  }
}