import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'add-account', component: AddAccountComponent },
    { path: 'list-account', component: ListAccountComponent },
    { path: 'edit-account', component: EditAccountComponent },
    {path : '', component : LoginComponent}
  ];

export const routing = RouterModule.forRoot(routes);
