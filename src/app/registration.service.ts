import { Injectable } from '@angular/core';
import { Observable, Subject, throwError, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { SaveUser } from './save-user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


 // private _emailSource = new Subject<string>();
  //emailpass$ = this._emailSource.asObservable();


 emailSource:any;
 saveUser = new SaveUser();
 private data = new BehaviorSubject<SaveUser>({}); //
 currentData = this.data.asObservable(); //
   
  constructor( private _http : HttpClient) { }

  setData(data:any) { //
    this.data.next(data); //
  } //


  sendEmail(emailid: string)
  {
    this.emailSource = (emailid);
  }


  public loginUserFromRemote(user: User)// to call method from java side
  { 
    return this._http.get("http://localhost:8080/login/"+ user.email + "/" + user.password,{responseType:'text' as 'json'});   
  }
  
                               
                                
                    
  public RegisterUserFromRemote(user: User)// to call method from java side
  { 
    return this._http.post("http://localhost:8080/createaccount",user,{responseType:'text' as 'json'});
    

  }

  public saveUserData(saveuser : SaveUser):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/note/create",saveuser);
  }


  public deletethefile(id:string,email:string){

    return this._http.delete("http://localhost:8080/note/delete/"+id+"/"+email);
    
  }

  public Listallthefile(email:string){

    return this._http.get("http://localhost:8080/note/findnotes/"+email);
    console.log(email);
  }

  public getNote(id:string) {
    return this._http.get("http://localhost:8080/note/findid/"+id);
  }
  
}

