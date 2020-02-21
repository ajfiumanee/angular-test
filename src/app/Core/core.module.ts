import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreRoutingModule } from './core.routes';
import { SharedModule } from '../shared/shared.module';
import { CoreComponent } from './core/core.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CreatePatientsComponent } from '../Patients/create-patients/create-patients.component';
import { PatientsComponent } from '../Patients/patients/patients.component';
import { ListPatientsComponent } from '../Patients/list-patients/list-patients.component';
import { EditPatientsComponent } from '../Patients/edit-patients/edit-patients.component';
import { LoginModule } from './pages/login/login.module';
import { CreateUsersComponent } from '../users/create-users/create-users.component';
import { UsersComponent } from '../users/users.component';
import { ListUsersComponent } from '../users/list-users/list-users.component';



@NgModule({
    declarations: [
        CoreComponent,
        SidebarComponent,
        HomeComponent,   //TODO: enviar para um modulo        
        RegisterComponent, //TODO: enviar para um modulo
        UserComponent,     //TODO: enviar para um modulo
        ForgotPasswordComponent, //TODO: enviar para um modulo
        // TODO: remover daqui e enviar para um modulo
        CreatePatientsComponent,
        PatientsComponent,
        ListPatientsComponent,
        EditPatientsComponent,
        CreateUsersComponent,
        UsersComponent,
        ListUsersComponent,
    
    ],
    imports: [        
        SharedModule,
        CoreRoutingModule,
        BrowserModule,        
        BrowserAnimationsModule,
        LoginModule
    ],
   
    providers: [

    ],
    exports: [
        CoreComponent, SidebarComponent, HomeComponent
    ]
})

export class CoreModule {}