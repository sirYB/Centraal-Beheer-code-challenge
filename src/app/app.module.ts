import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { VehicleSubtypeComponent } from './vehicle-subtype/vehicle-subtype.component';
import { LicenseplateCheckComponent } from './licenseplate-check/licenseplate-check.component';
import { VehicleImageComponent } from './vehicle-image/vehicle-image.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VehicleTypeComponent,
    VehicleSubtypeComponent,
    LicenseplateCheckComponent,
    VehicleImageComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
