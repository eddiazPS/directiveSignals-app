import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProducPageComponent } from './pages/produc-page/produc-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    // ProducPageComponent
  ]
})
export class ProductsModule { }
