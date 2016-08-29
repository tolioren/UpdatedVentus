import { Routes, RouterModule } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { LoginComponent } from './login.web.component';
import { CompanySignupComponent } from './company-signup.component';
import { TechnicianSignupComponent } from './technician-signup.component';
import { RecoverComponent } from './recover.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'company-singup', component: CompanySignupComponent },
    { path: 'technician-signup', component: TechnicianSignupComponent },
    { path: 'recover', component: RecoverComponent },
];

export const routing = RouterModule.forChild(routes);
