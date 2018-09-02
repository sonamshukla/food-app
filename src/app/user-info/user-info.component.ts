import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor() { }

  ngOnInit() {
  }

}
