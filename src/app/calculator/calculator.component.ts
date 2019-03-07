import { Component, OnInit } from '@angular/core';
import { NumbercalculatorService } from '../numbercalculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  calculator: number[];


  constructor(numberCalculatorService: NumbercalculatorService) { this.calculator = numberCalculatorService.getCourses(); }

  clickSimulator: number;

  clickNumbers(event: any) {
    this.clickSimulator = event.target.innerHTML;
  }

  ngOnInit() {
  }

}
