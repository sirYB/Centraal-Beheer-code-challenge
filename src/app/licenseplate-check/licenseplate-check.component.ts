import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KentekenCheck } from 'rdw-kenteken-check';

@Component({
  selector: 'app-licenseplate-check',
  templateUrl: './licenseplate-check.component.html',
  styleUrls: ['./licenseplate-check.component.css'],
})
export class LicenseplateCheckComponent implements OnInit {
  @Input() vehicleFormGroup!: FormGroup;
  @Input() vehicleType: string = '';

  public invalidLicensePlate: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public validateLicensePlate(): void {
    const kt = new KentekenCheck(this.vehicleFormGroup.controls['licensePlate'].value);
    let formattedInput = kt.formatLicense();
    if (kt.valid) {
      this.vehicleFormGroup.controls['licensePlate'].setValue(formattedInput);
      this.invalidLicensePlate = false;
    } else {
      this.vehicleFormGroup.controls['licensePlate'].setValue(null);
      this.invalidLicensePlate = true;
    }
  }

  public formatLicensePlate(event: KeyboardEvent): void {
    let licensePlateString = this.vehicleFormGroup.controls['licensePlate'].value;

    //Dit kan beter met een slimmere REGEX!
    if (licensePlateString) {
      if (event.key.match(/[A-Za-z]/)) {
        if (licensePlateString.slice(-1).match(/[0-9]/)) {
          this.vehicleFormGroup.controls['licensePlate'].setValue(licensePlateString + '-');
        }
        if (licensePlateString.slice(-2).match(/[A-Za-z]/)) {
          let segment = licensePlateString.slice(-2);
          if (segment.length == 2 && segment.match(/^[a-zA-Z]+$/)) {
            this.vehicleFormGroup.controls['licensePlate'].setValue(licensePlateString + '-');
          }
        }
      }
      else if (event.key.match(/[0-9]/)) {
        if (licensePlateString.slice(-1).match(/[A-Za-z]/)) {
          this.vehicleFormGroup.controls['licensePlate'].setValue(licensePlateString + '-');
        }
      }
    }
  }
}
