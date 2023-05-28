import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInventoryComponent } from './user-inventory.component';

const routes: Routes = [
  {
    path:'',
    component: UserInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInventoryRoutingModule { }
