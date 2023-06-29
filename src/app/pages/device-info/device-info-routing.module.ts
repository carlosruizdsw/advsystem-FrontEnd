import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceInfoComponent } from './device-info.component';

const routes: Routes = [
  {
    path:'',
    component: DeviceInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceInfoRoutingModule { }
