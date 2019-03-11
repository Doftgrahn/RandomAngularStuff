import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbercalculatorService {

  getCourses() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  getOperators() {
    return ['-', '+', '/', '*', 'Clear'];
  }

  








  constructor() { }

}
