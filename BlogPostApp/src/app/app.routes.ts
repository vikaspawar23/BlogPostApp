import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

import { authGuard } from './auth.guard';
import { BlogComponent } from './admin/components/blog/blog.component';
import { BlogslistComponent } from './admin/components/blogslist/blogslist.component';
import { UserslistComponent } from './admin/components/userslist/userslist.component';

import { AppComponent } from './app.component';
import { RegisterComponent } from './user/components/register/register.component';
import { OldblogsComponent } from './oldblogs/oldblogs.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'app', component: AppComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'oldblogs', component: OldblogsComponent, canActivate: [authGuard], },
  { path: 'myprofile', component: MyprofileComponent, canActivate: [authGuard], },

  { path: 'blog', component: BlogComponent, canActivate: [authGuard], },
  {
    path: 'blogslist',
    component: BlogslistComponent,
    canActivate: [authGuard],
  },
  {
    path: 'userslist',
    component: UserslistComponent,
    canActivate: [authGuard],
  },

  { path: '**', component: ErrorpageComponent },
];
