import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProducPageComponent } from './pages/produc-page/produc-page.component';
import { SharedModule } from '../shared/shared.module';
import { CustomLabelDirective } from '../shared/directives/custom-label.directive';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    // ProducPageComponent
    SharedModule,
    // CustomLabelDirective,

  ]
})
export class ProductsModule { }
