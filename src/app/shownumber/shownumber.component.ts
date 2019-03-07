import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shownumber',
  templateUrl: './shownumber.component.html',
  styleUrls: ['./shownumber.component.scss']
})
export class ShownumberComponent implements OnInit {

  defaultValue: number = 0;

  increaseValue() {
    this.defaultValue++;
  }

  decreaseValue($event: any) {
    if (this.defaultValue == 0) {
      $event.target.disabled = true;
    } else {
      this.defaultValue--;
    }
    $event.target.disabled = false;
  }

  resetDefaultValue() {
    this.defaultValue = 0;
  }

  constructor() { }
  ngOnInit() {}
}
