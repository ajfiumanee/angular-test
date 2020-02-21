import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataBaseModule } from 'src/app/database/database.module';

@NgModule({

    declarations : [
        LoginComponent
    ],
    imports : [        
        SharedModule,
        DataBaseModule
    ]  
    
})

export class LoginModule {}