import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { SaveUser } from '../save-user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

saveUser = new SaveUser();

users:any;
data:any;



  constructor(private _service:RegistrationService, private _route : Router ) { }

  deleteUser(id:string)
  {
    let resp=this._service.deletethefile(id,(localStorage.getItem('emailtoken') || '{}'));
    resp.subscribe((data)=>this.users=data);
    
  }

  viewNote(id:string) {
    let resp=this._service.getNote(id);
    resp.subscribe((data)=> {
      this.saveUser=data;
      this._service.setData(this.saveUser);
    });
    this._route.navigate(['./notes']);
  }
      

  ngOnInit(): void {
    let resp=this._service.Listallthefile((localStorage.getItem('emailtoken') || '{}'));
    resp.subscribe((data)=>this.users=data);
    console.log(this.users)
  }

}
