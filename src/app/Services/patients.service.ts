import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Patients } from 'src/app/Models/Patients/patients.model'

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private firestore: AngularFirestore) { }

  getPatients() {
    return this.firestore.collection('patients').snapshotChanges();
  }

  createPatients(patients: Patients) {
    return this.firestore.collection('patients').add({
      ...patients
    }).then(ref => {
      patients.Id = ref.id;
      console.log(`successful and Id: ${ref.id}`);
    }).catch(err => { console.log(`Error: ${err}`); }
    );
  }

  updatePatients(patients: Patients) {
    delete patients.Id;
    this.firestore.doc('patients/' + patients.Id).update(patients);
  }

  deletePatients(patientsId: string) {
    this.firestore.doc('patients/' + patientsId).delete();
  }
}
