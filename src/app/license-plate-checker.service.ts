import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateCheckerService {

  constructor() { }

  //Dit kan beter met een slimmere REGEX :-)!
  public formatLicensePlate(event:KeyboardEvent, licensePlateString: string): string {
    if (event.key.match(/[A-Za-z]/)) {
      if (licensePlateString.slice(-1).match(/[0-9]/)) {
        return licensePlateString + '-';
      }
      if (licensePlateString.slice(-2).match(/[A-Za-z]/)) {
        let segment = licensePlateString.slice(-2);
        if (segment.length == 2 && segment.match(/^[a-zA-Z]+$/)) {
          return licensePlateString + '-';
        }
      }
    }
    else if (event.key.match(/[0-9]/)) {
      if (licensePlateString.slice(-1).match(/[A-Za-z]/)) {
        return licensePlateString + '-';
      }
    }
    return licensePlateString;
  }
}
