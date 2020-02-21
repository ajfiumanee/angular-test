import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SecureInnerPagesGuard } from '../Guard/secure-inner-pages.guard';
import { CreatePatientsComponent } from '../Patients/create-patients/create-patients.component';
import { EditPatientsComponent } from '../Patients/edit-patients/edit-patients.component';
import { PatientsComponent } from '../Patients/patients/patients.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UsersComponent } from '../users/users.component';
import { CreateUsersComponent } from '../users/create-users/create-users.component';

const routes: Routes = [
  
  { path: '' , redirectTo   : '/home' , pathMatch : 'full'},
  { path: 'home', component: HomeComponent, canActivate: [SecureInnerPagesGuard]  },
  { path: 'login', component: LoginComponent, data: { hideMenus: 'true' }  },
  { path: 'patients/create', component: CreatePatientsComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'patients/edit', component: EditPatientsComponent, canActivate: [SecureInnerPagesGuard] },
  { path: "patients", component: PatientsComponent, canActivate: [SecureInnerPagesGuard] },  
  { path: 'register', component: RegisterComponent },  
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'user', component: UserComponent, canActivate: [SecureInnerPagesGuard] },  
  { path: 'users', component: UsersComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'users/createusers', component: CreateUsersComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'user', component: UserComponent, canActivate: [SecureInnerPagesGuard] },  
  //{ path: '**' Not Found } //TODO NOT Found      
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
  })
  export class CoreRoutingModule { }
  