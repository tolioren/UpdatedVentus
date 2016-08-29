import { Component, OnInit } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Meteor } from 'meteor/meteor';

import template from './login.web.component.html';

@Component({
  selector: 'login',
  template
})
export class LoginComponent extends MeteorComponent implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error = '';
  }

  login(credentials) {
    if (this.loginForm.valid) {
      Meteor.loginWithPassword(this.loginForm.value.email, this.loginForm.value.password, (err) => {
        if (err) {
          this.error = err;
        } else {
          this.router.navigate(['/']);
        }
      });
    }
  }
}
