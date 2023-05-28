import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentInventoryComponent } from '../equipment-inventory/equipment-inventory.component';
import { EquipmentRegistrationComponent } from './equipment-registration.component';

const routes: Routes = [
  {
    path:'',
    component: EquipmentRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRegistrationRoutingModule { }
