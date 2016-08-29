import { Component, OnInit } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { FormBuilder, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Router , ROUTER_DIRECTIVES} from '@angular/router';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { Accounts } from 'meteor/accounts-base';

import template from './company-signup.component.html';

@Component({
  selector: 'companysignup',
  template,
  directives: [ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
})
export class CompanySignupComponent extends MeteorComponent implements OnInit {
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
      email: ['', Validators.required],
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
  // angular
  //   .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  //   .controller('SelectHeaderController', function($scope, $element) {
  //     $scope.vegetables = ['Corn' ,'Onions' ,'Kale' ,'Arugula' ,'Peas', 'Zucchini'];
  //     $scope.searchTerm;
  //     $scope.clearSearchTerm = function() {
  //       $scope.searchTerm = '';
  //     };
  //     // The md-select directive eats keydown events for some quick select
  //     // logic. Since we have a search input here, we don't need that logic.
  //     $element.find('input').on('keydown', function(ev) {
  //         ev.stopPropagation();
  //     });
  //   });
}
