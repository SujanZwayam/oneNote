import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

import { RegistrationService } from '../registration.service';
import { SenderService } from '../sender.service';
import { User } from '../user';
import { SaveUser } from '../save-user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  user = new User;
  saveUser = new SaveUser();
  msg:any = ' ';
  
  private fromlogin ='';

  email:string ;
  password:string;

  localemailid:string; // to store email as local variable
  constructor(private _service:RegistrationService , private _sendservice:SenderService, private _route : Router) { }

 
  ngOnInit(): void {
    this.saveUser.createdBy = (localStorage.getItem("emailtoken") || '{}');
  }

  
 /* gotoNotes()
{
  this._sendservice.variable = this.fromlogin;
}
*/


  UserLogin(){
    this.fromlogin = this.user.email;
    console.log(this.localemailid);


    let response = this._service.loginUserFromRemote(this.user);
    response.subscribe(
      (data)=> {
        this.msg = data;

        if(this.msg==="Login done")
        {
         // this.fromlogin = this.user.email;
    
          this._route.navigate(['/userhome']);
          this.localemailid  = this.user.email;
          localStorage.setItem("emailtoken",this.localemailid)


    
        }
        else if(this.msg==="invalid credentials. Try again using correct email and password")
        {
          this._route.navigate(['/login']);
          this.email = " ";
          this.password = " ";
        }
        else if(this.msg==="account not exist")
        {
       this._route.navigate(['/registration']);
    
        }
      }

      // localStorage.setItem('dataSource', this.dataSource.length);

    )
    console.log(this.localemailid);



   

   // this.fromlogin = this.user.email;
    
  //  this._service.sendEmail(this.user.email);

  }


     

  gotoRegistration()
  {
    this._route.navigate(['/registration'])

  }
    
    

    }


