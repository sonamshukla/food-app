import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  countryCodes = [91];
  selectedCode = '+91';
  phoneNoFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{10}$/),
  ]);
  ngOnInit() {
  }
}
