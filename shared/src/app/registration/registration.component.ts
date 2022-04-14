import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { LoginComponent } from '../login/login.component';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg :any= '';
  
  

  constructor(private _service : RegistrationService , private _route: Router) { }

  ngOnInit(): void {
  }

  
  RegisterUser()
  { 
    let response = this._service.RegisterUserFromRemote(this.user);
    response.subscribe(
      (data)=> this.msg = data
      
  
    )
    if(this.msg=="true")
      this._route.navigate(['/login']);
    else{
      this._route.navigate(['/registration']);

    }


  }

  gotoLogin()
  {
    this._route.navigate(['/login'])

  }

}

