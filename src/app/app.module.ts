import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { HomeComponent } from './pages/home/home.component';
import { FooterModule } from './components/footer/footer.module';
import { DeviceInventoryComponent } from './pages/device-inventory/device-inventory.component';
import { EquipmentInventoryComponent } from './pages/equipment-inventory/equipment-inventory.component';
import { GalleriesInventoryComponent } from './pages/galleries-inventory/galleries-inventory.component';
import { ResponsibleInventoryComponent } from './pages/responsible-inventory/responsible-inventory.component';
import { UserInventoryComponent } from './pages/user-inventory/user-inventory.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { ResponsibleRegistrationComponent } from './pages/responsible-registration/responsible-registration.component';
import { GalleriesRegistrationComponent } from './pages/galleries-registration/galleries-registration.component';
import { EquipmentRegistrationComponent } from './pages/equipment-registration/equipment-registration.component';
import { DeviceRegistrationComponent } from './pages/device-registration/device-registration.component';
import { SupervisorRegistrationComponent } from './pages/supervisor-registration/supervisor-registration.component';
import { SupervisorInventoryComponent } from './pages/supervisor-inventory/supervisor-inventory.component';
import { RequestsInventoryComponent } from './pages/requests-inventory/requests-inventory.component';
import { RequestsRegistrationComponent } from './pages/requests-registration/requests-registration.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeviceInventoryComponent,
    EquipmentInventoryComponent,
    GalleriesInventoryComponent,
    ResponsibleInventoryComponent,
    UserInventoryComponent,
    UserRegistrationComponent,
    ResponsibleRegistrationComponent,
    GalleriesRegistrationComponent,
    EquipmentRegistrationComponent,
    DeviceRegistrationComponent,
    SupervisorRegistrationComponent,
    SupervisorInventoryComponent,
    RequestsInventoryComponent,
    RequestsRegistrationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
