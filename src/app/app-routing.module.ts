import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(chilRout => chilRout.LoginModule)
  },
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
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
