import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentInfoComponent } from './equipment-info.component';

const routes: Routes = [
  {
    path:'',
    component: EquipmentInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentInfoRoutingModule { }
