export class Patients {
    Id?: string;
    Name: string;
    DateBirth?: number;
    Age?: number;
    URLPhoto?: string;
    Relationship?: {
        Mother?: {
            Name: string;
            CPF: string;
        };
        Father?: {
            Name: string;
            CPF: string;
        };
    };
    Contacts?: {
        PhoneMother: number;
        PhoneFather: number;
    };
    Adresses?: [{
        Street: string;
        Neighborhood: string;
        City: string;
        State: string;
        Pincode: number;
        Actived: boolean;
    }];
    School?: {
        SchoolName: string;
        PublicPlace: string;
        Contats: string;
    };
}
