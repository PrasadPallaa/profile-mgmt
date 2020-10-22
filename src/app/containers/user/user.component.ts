import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  userForm = new FormGroup({
    user: new FormControl(''),
    phoneNumber: new FormControl('', Validators.maxLength(5))
  });

  ngOnInit(): void {
  }

}
