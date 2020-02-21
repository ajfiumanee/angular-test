import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({    
    imports: [CommonModule, FormsModule, ReactiveFormsModule, LayoutModule],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, LayoutModule]   
})

export class SharedModule {

    //TODO: comentada
    // static forRoot(): ModuleWithProviders {
    // return {
    //     ngModule: SharedModule,
    //     // providers: [ShoppingCartService, RestaurantService, OrderService]
    //     }
    // }
}