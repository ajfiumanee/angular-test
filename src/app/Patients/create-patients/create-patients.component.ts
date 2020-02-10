import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/Models/Patients/patients.model';
import { PatientsService } from 'src/app/Services/patients.service';

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.scss']
})
export class CreatePatientsComponent implements OnInit {
  patients: Patients;
  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.patients = new Patients();
  }

  create(patients: Patients) {
    let temp = this.patientsService.createPatients(this.patients).then(ref => {
      console.log(this.patients);
    });
  }

}
