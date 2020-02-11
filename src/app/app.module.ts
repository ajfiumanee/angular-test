import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { FormsModule } from '@angular/forms'
import { CreatePatientsComponent } from './Patients/create-patients/create-patients.component';
import { PatientsComponent } from './Patients/patients/patients.component';
import { ListPatientsComponent } from './Patients/list-patients/list-patients.component';
import { EditPatientsComponent } from './Patients/edit-patients/edit-patients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './Core/auth/login/login.component';
import { RegisterComponent } from './Core/auth/register/register.component';
import { UserComponent } from './Core/auth/user/user.component';
import { AuthService } from './Services/auth.service';
import { VerifyEmailComponent } from './Core/auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './Core/auth/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatePatientsComponent,
    PatientsComponent,
    ListPatientsComponent,
    EditPatientsComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
