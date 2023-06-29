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
    path: 'supervisor-inventory',
    canActivate: [],
    loadChildren: () => import('./pages/supervisor-inventory/supervisor-inventory.module').then(m => m.SupervisorInventoryModule)
  },
  {
    path: 'user-inventory',
    canActivate: [],
    loadChildren: () => import('./pages/user-inventory/user-inventory.module').then(m => m.UserInventoryModule)
  },
  {
    path: 'requests-inventory',
    canActivate: [],
    loadChildren: () => import('./pages/requests-inventory/requests-inventory.module').then(m => m.RequestsInventoryModule)
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
    path: 'supervisor-registration',
    canActivate: [],
    loadChildren: () => import('./pages/supervisor-registration/supervisor-registration.module').then(m => m.SupervisorRegistrationModule)
  },
  {
    path: 'user-registration',
    canActivate: [],
    loadChildren: () => import('./pages/user-registration/user-registration.module').then(m => m.UserRegistrationModule)
  },
  {
    path: 'requests-registration',
    canActivate: [],
    loadChildren: () => import('./pages/requests-registration/requests-registration.module').then(m => m.RequestsRegistrationModule)
  },

  //APARTADO MENÚ INFO
  {
    path: 'device-info',
    canActivate: [],
    loadChildren: () => import('./pages/device-info/device-info.module').then(m => m.DeviceInfoModule)
  },
  {
    path: 'equipment-info',
    canActivate: [],
    loadChildren: () => import('./pages/equipment-info/equipment-info.module').then(m => m.EquipmentInfoModule)
  },
  {
    path: 'requests-info',
    canActivate: [],
    loadChildren: () => import('./pages/requests-info/requests-info.module').then(m => m.RequestsInfoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
