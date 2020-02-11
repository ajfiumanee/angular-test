import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/Models/Patients/patients.model';
import { PatientsService } from 'src/app/Services/patients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit-patients',
  templateUrl: './edit-patients.component.html',
  styleUrls: ['./edit-patients.component.scss']
})
export class EditPatientsComponent implements OnInit {
  patients: Patients;
  id: string;
  constructor(private patientsService: PatientsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.patientsService.getPatient(this.id).subscribe(resp => {
      this.patients = new Patients();
      this.patients = {
        Id: resp.payload.id,
        Name: resp.payload.data()['Name'],
        CPF: resp.payload.data()['CPF']
      };
      console.log(this.patients);
    });
  }

  create(patient: Patients) {
    this.patientsService.updatePatients(patient);
    this.router.navigate(['/pacientes']);
  }

}
