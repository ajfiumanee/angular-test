import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User, UserCreating } from 'src/app/Models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersoucer = new BehaviorSubject({ patient: null, id: '' });
  user = this.usersoucer.asObservable();
 
  constructor(private firestore: AngularFirestore,
    private auth: AuthService) { }

  getAllusers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  getUser(id: string) {
    return this.firestore.collection('users').doc(id).snapshotChanges();
  }

  createusers(user: User) {
    return this.firestore.collection('users').add({
      ...user
    }).then(ref => {
      user.uid = ref.id;
      console.log(`Successful and Id: ${ref.id}`);
    }).catch(err => { console.log(`Error: ${err}`); }
    );
  }

  updateUsers(user: User) {
    this.firestore.doc('users/' + user.uid).update(user);
  }

  deleteUsers(usersId: string) {
    this.firestore.doc('users/' + usersId).delete();
  }
}
