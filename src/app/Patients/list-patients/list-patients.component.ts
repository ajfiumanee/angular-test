import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/Services/patients.service';
import { Patients } from 'src/app/Models/Patients/patients.model';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {
  patients: Patients[];
  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.patientsService.getPatients().subscribe(data => {
      this.patients = data.map(e => {
        return {
          Id: e.payload.doc.id,
          ...e.payload.doc.data() as Patients
        } as Patients;
      })
    });
  }

  delete(id: string) {
    this.patientsService.deletePatients(id);
  }

}
