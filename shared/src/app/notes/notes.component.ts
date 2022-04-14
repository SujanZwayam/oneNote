import { Component, OnInit } from '@angular/core';
import { Todo } from './../Note';
import { SaveUser } from '../save-user';
import { User } from '../user';
import { RegistrationService } from '../registration.service';





@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

saveUser = new SaveUser();

  todos:Todo[];

inputTodo:string = "";

inputTitle:string = "";


  constructor(private _service:RegistrationService) { }
  

  ngOnInit(): void {

    this._service.emailpass$.subscribe(
      message=>{
        alert("hiii");
      }
    )
    
    this.todos = [
     
    ] 
  }


  toggleDone(id:number)
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

  

  addTodo()
  {
    this._service.saveUserData(this.saveUser).subscribe(
      data => {
        console.log("data saved");
      }
    );


    this.todos.push({
      title: this.inputTitle,
      content: this.inputTodo,
      completed: false
    });


    this.inputTodo = "";
    this.inputTitle = "";
  }

}

export interface TitleNotes{
  
  title:string;
  content: string;
}

