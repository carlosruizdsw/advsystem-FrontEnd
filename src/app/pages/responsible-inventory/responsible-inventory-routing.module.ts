import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsibleInventoryComponent } from './responsible-inventory.component';

const routes: Routes = [
  {
    path:'',
    component: ResponsibleInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsibleInventoryRoutingModule { }
