import { Component, OnInit } from '@angular/core';
import { SaveUser } from '../save-user';
import { RegistrationService } from '../registration.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  saveUser = new SaveUser();

  constructor(private _service:RegistrationService, private _route : Router ) { }

  newNote() {
    this._service.setData(this.saveUser);
    this._route.navigate(['./notes']);
  }

  ngOnInit(): void {
  }

}
