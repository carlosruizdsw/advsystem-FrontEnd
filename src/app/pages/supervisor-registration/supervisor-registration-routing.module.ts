import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupervisorRegistrationComponent } from './supervisor-registration.component';


const routes: Routes = [
  {
    path:'',
    component: SupervisorRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRegistrationRoutingModule { }
