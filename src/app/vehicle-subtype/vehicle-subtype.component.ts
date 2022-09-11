import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VehicleTypes } from '../VehicleTypes';

@Component({
  selector: 'app-vehicle-subtype',
  templateUrl: './vehicle-subtype.component.html',
  styleUrls: ['./vehicle-subtype.component.css']
})
export class VehicleSubtypeComponent implements OnInit {
  @Input() vehicleFormGroup!: FormGroup;
  @Input() vehicleType: string = '';

  public VehicleTypes = VehicleTypes;
  public carSubTypes: Array<string> = ['Hatchback','Sedan', 'Station', 'Cabriolet', 'Coupé', 'Multi Purpose Vehicle (MVP)', 'Terreinauto'];
  public motorSubTypes: Array<string> = ['All-road', 'Naked', 'Enduro', 'Race', 'Toermotor', 'Chopper', 'Zijspan'];

  constructor() { }

  ngOnInit(): void {
    this.vehicleFormGroup.get('vehicleSubtype')?.setValue(this.carSubTypes[0]);
  }



}
