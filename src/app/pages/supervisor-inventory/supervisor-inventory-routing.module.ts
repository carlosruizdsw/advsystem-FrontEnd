import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupervisorInventoryComponent } from './supervisor-inventory.component';


const routes: Routes = [
  {
    path:'',
    component: SupervisorInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorInventoryRoutingModule { }
