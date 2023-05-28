import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentInventoryComponent } from './equipment-inventory.component';

const routes: Routes = [
  {
    path:'',
    component: EquipmentInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentInventoryRoutingModule { }
