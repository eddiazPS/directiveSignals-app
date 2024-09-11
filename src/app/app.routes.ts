import { Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { SignalsModule } from './signals/signals.module';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
{
path: 'products',
loadChildren: () => import ('./products/products.module').then(m => m.ProductsModule)
},
{
  path: 'singnals',
  loadChildren: () => import ('./signals/signals.module').then(m => m.SignalsModule)
},
{
  path:'**',
  redirectTo: 'products',
}


];


// HttpClientModule
