import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  { path: 'users/login', component: LoginComponent },
  { path: 'users/add-user', component: AddUserComponent },
  { path: 'users/list-user', component: ListUserComponent },
  { path: 'users/edit-user', component: EditUserComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);