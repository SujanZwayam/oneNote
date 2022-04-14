import { Component, OnInit } from '@angular/core';
import { Todo } from './../Note';
import { SaveUser } from '../save-user';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { SenderService } from '../sender.service';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';




@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

saveUser = new SaveUser();

titlePlaceholder = "";
contentPlaceholder = "";

  todos:Todo[];

inputTodo:string = "";

inputTitle:string = "";

email:string = "";

  constructor(private _service:RegistrationService, private _sendservice:SenderService, private _route : Router ){ }
  

  ngOnInit(): void {

    this.todos = [
     
    ] 
    this._service.currentData.subscribe(data => {
      console.log(data.createdBy);
      this.saveUser = data || {};
    });

    this.saveUser.createdBy = (localStorage.getItem('emailtoken') || '{}');

    console.log(this.saveUser.createdBy);
    console.log(this.saveUser.title);

    if(!this.saveUser.title) {
        this.titlePlaceholder = "Enter your title";
        //this.contentPlaceholder = "Enter your content";
    } else {
      this.titlePlaceholder = this.saveUser.title!;
      //this.contentPlaceholder = this.saveUser.content!;
    }

    if(!this.saveUser.content) {
      //this.titlePlaceholder = "Enter your title";
      this.contentPlaceholder = "Enter your content";
  } else {
    //this.titlePlaceholder = this.saveUser.title!;
    this.contentPlaceholder = this.saveUser.content!;
  }    
  }


  /*toggleDone(id:number)
  {
    this.todos.map((v,i) => {
      if(i==id) v.completed = !v.completed;

      return v;
    })
  }


  deleteTodo(id:number)
  {
    this.todos = this.todos.filter((v,i) => i != id);
  }
*/
  

  addTodo()
  {
    alert("Hurray! Your note is saved!")
    this._service.saveUserData(this.saveUser).subscribe(
      data => {
        console.log("data saved");
      }
    );
    this._route.navigate(['./userhome']);
  }
    /*this.todos.push({
      title: this.inputTitle,
      content: this.inputTodo,
      completed: false
    });
   

    this.inputTodo = "";
    this.inputTitle = "";
  }*/

}

/*export interface TitleNotes{
  
  title:string;
  content: string;
}*/

