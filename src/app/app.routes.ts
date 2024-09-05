import { Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';

export const routes: Routes = [
{
path: 'products',
loadChildren: () => import ('./products/products.module').then(m => m.ProductsModule)
},
{
  path:'**',
  redirectTo: 'products',
}


];
