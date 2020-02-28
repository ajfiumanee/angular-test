import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/Services/util/roles.service';
import { Roles } from 'src/app/Models/util/roles';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../shared/validators/mustMatch';
import { ValidatorCPF } from 'src/app/shared/validators/validatorCPF';
import { PatterPhone } from '../../shared/validators/validatorsPattern';
import { UsersService } from 'src/app/Services/users.service';
import { UserCreating } from 'src/app/Models/user.model';
import { auth } from 'firebase';
import { AuthService } from 'src/app/Services/auth.service';
import { randomPassword } from 'src/app/shared/randomPassword';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {
  formB: FormGroup;
  role: Roles[];
  constructor(private rolesService: RolesService,
    private userService: UsersService,
    private authUser: AuthService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getRoles();
    this.formB = this.fb.group({
      editName: [null, [Validators.required, Validators.minLength(3)]],
      selCargo: [null, [Validators.required]],
      editEmail: [null, [Validators.required, Validators.email]],
      editConfirmEmail: [null, [Validators.required, Validators.email]],
      editCPF: [null, [Validators.required, Validators.minLength(11)]],
      editRG: [null, Validators.required],
      editPhone: [null, [Validators.required, Validators.minLength(11), Validators.pattern(PatterPhone)]]
    }, {
      validator: [MustMatch('editEmail', 'editConfirmEmail'), ValidatorCPF('editCPF')]
    });
  }
  get f() {
    return this.formB.controls;
  }

  setUser() {

    if (!this.formB.invalid) {
      let fTemp = this.formB.value;
      let user: UserCreating = {
        Email: fTemp.editEmail,
        Name: fTemp.editName,
        CPF: fTemp.editCPF,
        RG: fTemp.editRG,
        Phone: fTemp.editPhone,
        Roles: fTemp.selCargo
      };
      this.authUser.registerUser(user);
    } else {
      this.formB.markAllAsTouched();
      console.log('haha');
    }
  }

  getRoles() {
    this.rolesService.getRolesAll().subscribe(data => {
      this.role = data.map(e => {
        return {
          uid: e.payload.doc.id,
          ...e.payload.doc.data() as Roles
        } as Roles;
      });
      console.log(this.role);
    });
  }
}
