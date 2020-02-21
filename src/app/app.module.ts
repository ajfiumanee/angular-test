
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataBaseModule } from './database/database.module';

@NgModule({
  declarations: [
    AppComponent           
  ],
  imports: [    
    CoreModule,
    DataBaseModule    
  ],
  // providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
