import { Routes, RouterModule } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { PartiesListComponent } from './imports/parties/parties-list.web.component';
import { PartyDetailsComponent } from './imports/parties/party-details.component';
import { LoginComponent } from './imports/auth/login.web.component';
import { TechnicianSignupComponent } from './imports/auth/technician-signup.component';
import { CompanySignupComponent } from './imports/auth/company-signup.component';
import { RecoverComponent } from './imports/auth/recover.component';

const routes: Routes = [
  { path: '', component: PartiesListComponent },
  { path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['CanActivateForLoggedIn'] },
  { path: 'login', component: LoginComponent },
  { path: 'technician-signup', component: TechnicianSignupComponent },
  { path: 'company-signup', component: CompanySignupComponent },
  { path: 'recover', component: RecoverComponent },
];


export const routing = RouterModule.forRoot(routes);