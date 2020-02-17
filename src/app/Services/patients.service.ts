import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Patients } from 'src/app/Models/Patients/patients.model'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private patientSoucer = new BehaviorSubject({ patient: null, id: '' });
  patient = this.patientSoucer.asObservable();
  constructor(private firestore: AngularFirestore) { }

  getAllPatients() {
    return this.firestore.collection('patients').snapshotChanges();
  }

  getPatient(id: string) {
    return this.firestore.collection('patients').doc(id).snapshotChanges();
  }

  createPatients(patients: Patients) {
    return this.firestore.collection('patients').add({
      ...patients
    }).then(ref => {
      patients.Id = ref.id;
      console.log(`Successful and Id: ${ref.id}`);
    }).catch(err => { console.log(`Error: ${err}`); }
    );
  }

  updatePatients(patients: Patients) {
    this.firestore.doc('patients/' + patients.Id).update(patients);
  }

  deletePatients(patientsId: string) {
    this.firestore.doc('patients/' + patientsId).delete();
  }
}
