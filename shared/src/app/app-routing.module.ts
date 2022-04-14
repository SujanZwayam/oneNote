import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'home', component : HomeComponent},
  { path: 'login' , component : LoginComponent},
  { path: 'notes', component : NotesComponent},
  { path: 'registration', component: RegistrationComponent},
   {path: '',pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
