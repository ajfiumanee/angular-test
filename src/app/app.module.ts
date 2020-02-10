import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';


import { AngularFireModule } from '@angular/fire';
import{FormsModule} from '@angular/forms'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NavBarComponent } from './Core/nav-bar/nav-bar.component';
import { CreatePatientsComponent } from './Patients/create-patients/create-patients.component';
import { PatientsComponent } from './Patients/patients/patients.component';
import { ListPatientsComponent } from './Patients/list-patients/list-patients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreatePatientsComponent,
    PatientsComponent,
    ListPatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
