import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from '../Models/util/roles';
import { RolesService } from '../Services/util/roles.service';
import { retryWhen } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  role: Roles[];
  constructor(public router: Router,
    private rolesService: RolesService) { }

  ngOnInit() {
    this.creatUtil();
  }

  creatUtil() {
    this.rolesService.getRolesAll().subscribe(data => {
      console.log(data.length);
      if (data.length <= 0) {
        this.rolesService.createRoles();
      } else {
        this.role = data.map(e => {
          return {
            uid: e.payload.doc.id,
            ...e.payload.doc.data() as Roles
          } as Roles;
        });
       
        console.log(this.role);
      }
    });
  }

}
