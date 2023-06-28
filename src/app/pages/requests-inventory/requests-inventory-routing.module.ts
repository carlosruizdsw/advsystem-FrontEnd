import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsInventoryComponent } from './requests-inventory.component';

const routes: Routes = [
  {
    path:'',
    component: RequestsInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsInventoryRoutingModule { }
