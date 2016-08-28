import { Component } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { Meteor } from 'meteor/meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { DisplayNamePipe } from './imports/shared/display-name.pipe';

import template from './app.web.component.html';

@Component({
  selector: 'app',
  template
})
@InjectUser('user')
export class AppComponent extends MeteorComponent {
  user: Meteor.User;

  constructor() {
    super();
  }

  logout() {
    Meteor.logout();
  }
}
