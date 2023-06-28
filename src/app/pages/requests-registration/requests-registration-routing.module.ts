import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsRegistrationComponent } from './requests-registration.component';

const routes: Routes = [
  {
    path:'',
    component: RequestsRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRegistrationRoutingModule { }
