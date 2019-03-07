import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  state: boolean = true;

  buttonTitle = 'Sign in!'

  onClick() {
    if (this.state) {
      this.buttonTitle = 'Sign Out'
      this.state = false;
    }
    else {
      this.buttonTitle = 'Sign In'
      this.state = true
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
