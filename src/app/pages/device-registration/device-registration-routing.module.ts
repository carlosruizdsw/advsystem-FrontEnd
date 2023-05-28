import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceRegistrationComponent } from './device-registration.component';

const routes: Routes = [
  {
    path:'',
    component: DeviceRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRegistrationRoutingModule { }
