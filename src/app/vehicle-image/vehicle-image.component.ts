import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-image',
  templateUrl: './vehicle-image.component.html',
  styleUrls: ['./vehicle-image.component.css']
})
export class VehicleImageComponent implements OnInit {
  @Input() vehicleType: string = '';

  constructor() { }

  ngOnInit(): void { }


}
