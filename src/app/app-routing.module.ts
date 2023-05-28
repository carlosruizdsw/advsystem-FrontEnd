import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [],
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  
  {
    path: 'login',
    canActivate: [],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },

  //APARTADO MENÚ INVENTARIOS
  {
    path: 'device-inventory',
    canActivate: [],
    loadChildren: () => import('./pages/device-inventory/device-inventory.module').then(m => m.DeviceInventoryModule)
  },
  {
    path: 'equipment-inventory',
    canActivate: [],
    loadChildren: () => import('./pages/equipment-inventory/equipment-inventory.module').then(m => m.EquipmentInventoryModule)
  },
  {
    path: 'galleries-inventory',
    canActivate: [],
    loadChildren: () => import('./pages/galleries-inventory/galleries-inventory.module').then(m => m.GalleriesInventoryModule)
  },
  {
    path: 'responsible-inventory',
    canActivate: [],
    loadChildren: () => import('./pages/responsible-inventory/responsible-inventory.module').then(m => m.ResponsibleInventoryModule)
  },
  {
    path: 'user-inventory',
    canActivate: [],
    loadChildren: () => import('./pages/user-inventory/user-inventory.module').then(m => m.UserInventoryModule)
  },

  //APARTADO MENÚ REGISTRO
  {
    path: 'device-registration',
    canActivate: [],
    loadChildren: () => import('./pages/device-registration/device-registration.module').then(m => m.DeviceRegistrationModule)
  },
  {
    path: 'equipment-registration',
    canActivate: [],
    loadChildren: () => import('./pages/equipment-registration/equipment-registration.module').then(m => m.EquipmentRegistrationModule)
  },
  {
    path: 'galleries-registration',
    canActivate: [],
    loadChildren: () => import('./pages/galleries-registration/galleries-registration.module').then(m => m.GalleriesRegistrationModule)
  },
  {
    path: 'responsible-registration',
    canActivate: [],
    loadChildren: () => import('./pages/responsible-registration/responsible-registration.module').then(m => m.ResponsibleRegistrationModule)
  },
  {
    path: 'user-registration',
    canActivate: [],
    loadChildren: () => import('./pages/user-registration/user-registration.module').then(m => m.UserRegistrationModule)
  },

  //APARTADO SEGUIMIENTO
  {
    path: 'requests',
    canActivate: [],
    loadChildren: () => import('./pages/requests/requests.module').then(m => m.RequestsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
