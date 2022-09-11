import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.css']
})
export class VehicleTypeComponent implements OnInit {
  @Input() vehicleFormGroup!: FormGroup;

  public vehicleOptions: Array<string> =  ['Auto', 'Motor', 'Scooter'];

  constructor() {
  }

  ngOnInit(): void {
    this.vehicleFormGroup.get('vehicleType')?.setValue(this.vehicleOptions[0]);
  }


}
