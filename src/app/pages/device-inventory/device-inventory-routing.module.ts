import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceInventoryComponent } from './device-inventory.component';

const routes: Routes = [
  {
    path:'',
    component: DeviceInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceInventoryRoutingModule { }
