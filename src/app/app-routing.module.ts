import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'clients',  loadChildren: ()=>import('./clients/clients.module').then(childRout =>childRout.ClientsModule)},
      { path: 'products', loadChildren: () => import('./products/products.module').then(childRout => childRout.ProductsModule) },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(chilRout => chilRout.LoginModule)
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
