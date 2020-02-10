import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePatientsComponent} from './Patients/create-patients/create-patients.component';
import {PatientsComponent} from './Patients/patients/patients.component';
import {EditPatientsComponent} from './Patients/edit-patients/edit-patients.component';

const routes: Routes = [
  {path: "pacientes/create", component: CreatePatientsComponent},
  {path: "pacientes/edit", component: EditPatientsComponent},
  {path: "pacientes", component: PatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
