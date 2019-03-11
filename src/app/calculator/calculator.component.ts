import { Component, OnInit } from '@angular/core';
import { NumbercalculatorService } from '../numbercalculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  title: string = 'Excervice 4.3';

  calculator: number[];
  operators: string[];

  constructor(numberCalculatorService: NumbercalculatorService) {
    this.calculator = numberCalculatorService.getCourses();
    this.operators = numberCalculatorService.getOperators();
  }

  clickSimulator: number;


  clickNumbers(event: any) {
    this.clickSimulator = event.target.innerHTML;
  }


  ngOnInit() {

  }

}
