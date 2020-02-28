import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Roles } from 'src/app/Models/util/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  roles: Roles[];
  constructor(private firestore: AngularFirestore) { }

  createRoles() {
    this.roles = [
      { role: 'P.O' },
      { role: 'Diretora' },
      { role: 'Gerente' },
      { role: 'Administrativo' },
      { role: 'Supervisora Sênior' },
      { role: 'Supervisora Plena' },
      { role: 'Terapeuta Líder' },
      { role: 'Terapeuta' }
    ];
    this.roles.forEach(role => {
      console.log({...role});
      this.firestore.collection('roles').add({...role});
    });
  }

  getRolesAll() {
    return this.firestore.collection('roles').snapshotChanges();
  }
}
