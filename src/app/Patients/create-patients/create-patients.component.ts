import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/Models/Patients/patients.model';
import { PatientsService } from 'src/app/Services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.scss']
})
export class CreatePatientsComponent implements OnInit {
  patients: Patients;
  errors: string[];
  constructor(private patientsService: PatientsService,
    private router: Router) { }

  ngOnInit() {
    this.patients = new Patients();
    console.log(this.patients);
  }

  create(patients: Patients) {
    if ((patients.CPF) && (patients.Nome)) {
      let temp = this.patientsService.createPatients(patients).then(ref => {
        if (patients.Id) {
          this.router.navigate(['/pacientes']);
        }
      });
    } else {
      this.errors = ["Nome em branco",
        "CPF em branco!"];
    }
  }
}
