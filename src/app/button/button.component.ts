import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  state: boolean = true;

  buttonTitle = 'Sign in!'

  onClick($event) {
    if (this.state) {
      this.buttonTitle = 'Sign in'
      this.state = false;
    }
    else {
      this.buttonTitle = 'Sign out'
      this.state = true
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
