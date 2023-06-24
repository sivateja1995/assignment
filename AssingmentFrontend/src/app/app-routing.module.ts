import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatesComponent } from './components/states/states.component';

const routes: Routes = [
  {
    path:'state',
    component:StatesComponent
  },
  {
    path:'',
    redirectTo:'state',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
