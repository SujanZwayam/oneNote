import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

   user = new User;
   msg:any = ' ';
   error: number ;

   email:string ;
   password:string;


  constructor(private _service:RegistrationService , private _route : Router) { }

  ngOnInit(): void {
  }

  UserLogin(){
    let response = this._service.loginUserFromRemote(this.user);
    response.subscribe(
      (data)=> this.msg = data  
    )


    if(this.msg==="Login done")
    {
      this._route.navigate(['/notes']);

    }
    else if(this.msg==="invalid credentials.Try again using correct email and password")
    {
      this._route.navigate(['/login']);
      this.email = " ";
      this.password = " ";
    }
    else if(this.msg==="account not exist")
    {
   this._route.navigate(['/registration']);

    }
    this._service.sendEmail(this.user.email);

  }
     

  gotoRegistration()
  {
    this._route.navigate(['/registration'])

  }
    
    

    }


