import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePatientsComponent} from './Patients/create-patients/create-patients.component';
import {PatientsComponent} from './Patients/patients/patients.component';
import {EditPatientsComponent} from './Patients/edit-patients/edit-patients.component';
import{LoginComponent} from './Core/login/login.component';
import{RegisterComponent} from './Core/register/register.component';
import{UserComponent} from './Core/user/user.component';

const routes: Routes = [
  {path: "pacientes/create", component: CreatePatientsComponent},
  {path: "pacientes/edit", component: EditPatientsComponent},
  {path: "pacientes", component: PatientsComponent},
  {path: 'login', component:LoginComponent },
  {path: 'register', component:RegisterComponent },
  {path: 'user', component:UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
