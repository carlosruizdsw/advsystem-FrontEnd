import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriesRegistrationComponent } from './galleries-registration.component';

const routes: Routes = [
  {
    path:'',
    component: GalleriesRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleriesRegistrationRoutingModule { }
