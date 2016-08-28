import { Component, OnInit } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { MeteorComponent } from 'angular2-meteor';
import { FormBuilder, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Router , ROUTER_DIRECTIVES} from '@angular/router';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { Accounts } from 'meteor/accounts-base';

import { Curriculums } from '../../../both/collections/curriculums.collection';
import { CurriculumUpload } from './curriculum-upload.component';

import template from './technician-signup.component.html';

@Component({
  selector: 'techniciansignup',
  template,
  directives: [ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, CurriculumUpload],
})
export class TechnicianSignupComponent extends MeteorComponent implements OnInit {
  signupForm: FormGroup;
  error: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      user_name: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      address: ['', Validators.required],
      qualification: ['', Validators.required],
      gender: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      postal: ['', Validators.required],
      curriculum: ['', Validators.required],
      password: ['', Validators.required],

    });

    this.error = '';
  }

  signup() {
    if (this.signupForm.valid) {
      Accounts.createUser({
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      }, (err) => {
        if (err) {
          this.error = err;
        } else {
          this.router.navigate(['/']);
        }
      });
    }
  }

  onCorriculum(corriculumId: string) {
    this.curriculum.push(corriculumId);
  }

  // resetForm() {
  //   this.addForm.controls['name']['updateValue']('');
  //   this.addForm.controls['description']['updateValue']('');
  //   this.addForm.controls['location']['updateValue']('');
  //   this.addForm.controls['public']['updateValue'](false);
  // }
}
