import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriesInventoryComponent } from './galleries-inventory.component';

const routes: Routes = [
  {
    path:'',
    component: GalleriesInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleriesInventoryRoutingModule { }
