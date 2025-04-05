import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'Clients',
    loadChildren:()=>import('./clients/clients.module').then(childRout =>childRout.ClientsModule)
  },
  {
    path: '**',
    redirectTo: 'Clients'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
