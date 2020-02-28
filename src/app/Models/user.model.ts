import { Roles } from './util/roles';

export class User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}
export class UserCreating {
    // constructor(Email: string, Name: string, CPF: string, RG: string, Phone: string, Roles: Roles) {
    //     this.Email = Email;
    //     this.Name = Name;
    //     this.CPF = CPF;
    //     this.RG = RG;
    //     this.Phone = Phone;
    //     this.Roles = Roles;
    // }

    Uid?: string;
    Email: string;
    Name: string;
    CPF: string;
    RG: string;
    Phone: string;
    Roles: Roles;
}
