import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsInfoComponent } from './requests-info.component';

const routes: Routes = [
  {
    path:'',
    component: RequestsInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsInfoRoutingModule { }
