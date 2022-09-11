import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IVehicleForm } from './IVehicleForm'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public vehicleFormGroup!: FormGroup;
  public vehicleType: string = '';
  public submitError: boolean = false;
  public showSuccess: boolean = false;
  private intitalValues: FormGroup["value"];
  private vehicleFormSubscription!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createVehicleForm();
    this.subscribeToFormChanges();
  }

  private createVehicleForm(): void {
    this.vehicleFormGroup = this.fb.group({
      vehicleType: ['', Validators.required],
      vehicleSubtype: ['', Validators.required],
      licensePlate: ['', Validators.compose([Validators.required, Validators.minLength(8)]) ],
    });
  }

  private subscribeToFormChanges(): void {
    this.vehicleFormSubscription = this.vehicleFormGroup.valueChanges.subscribe((formValues:IVehicleForm) => {
      this.vehicleType = formValues.vehicleType;
      this.showSuccess = false;
    })
  }

  ngAfterViewInit(): void {
    this.intitalValues = this.vehicleFormGroup.value;
  }

  public onSubmit(): void {
    if(this.vehicleFormGroup.valid) {
      this.vehicleFormGroup.reset(this.intitalValues);
      this.showSuccess = true;
      this.submitError = false;
    } else {
      this.submitError = true;
    }
  }

  ngOnDestroy(): void {
    this.vehicleFormSubscription.unsubscribe();
  }

}
