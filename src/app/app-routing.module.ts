import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePatientsComponent} from './Patients/create-patients/create-patients.component';

const routes: Routes = [
  {path: "pacientes", component: CreatePatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
