import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'clients',
    loadChildren:()=>import('./clients/clients.module').then(childRout =>childRout.ClientsModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(childRout => childRout.ProductsModule)
  },
  {
    path: '**',
    redirectTo: 'clients'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
