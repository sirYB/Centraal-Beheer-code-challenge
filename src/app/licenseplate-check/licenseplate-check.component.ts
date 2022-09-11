import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KentekenCheck } from 'rdw-kenteken-check';
import { LicensePlateCheckerService } from '../license-plate-checker.service';

@Component({
  selector: 'app-licenseplate-check',
  templateUrl: './licenseplate-check.component.html',
  styleUrls: ['./licenseplate-check.component.css'],
})
export class LicenseplateCheckComponent implements OnInit {
  @Input() vehicleFormGroup!: FormGroup;
  @Input() vehicleType: string = '';

  public invalidLicensePlate: boolean = false;

  constructor(private licensePlateChecker: LicensePlateCheckerService) {}

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
    if (licensePlateString) {
      this.vehicleFormGroup.controls['licensePlate'].setValue(this.licensePlateChecker.formatLicensePlate(event, licensePlateString));
    }
  }
}
