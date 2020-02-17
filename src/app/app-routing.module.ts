import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePatientsComponent } from './Patients/create-patients/create-patients.component';
import { PatientsComponent } from './Patients/patients/patients.component';
import { EditPatientsComponent } from './Patients/edit-patients/edit-patients.component';
import { LoginComponent } from './Core/auth/login/login.component';
import { RegisterComponent } from './Core/auth/register/register.component';
import { UserComponent } from './Core/auth/user/user.component';
import { VerifyEmailComponent } from './Core/auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './Core/auth/forgot-password/forgot-password.component'
import { SecureInnerPagesGuard } from './Guard/secure-inner-pages.guard';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'home', component: HomeComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'patients/create', component: CreatePatientsComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'patients/edit', component: EditPatientsComponent, canActivate: [SecureInnerPagesGuard] },
  { path: "patients", component: PatientsComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
