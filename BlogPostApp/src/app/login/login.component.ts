import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AdminService } from '../admin/services/admin.service';
import { AppComponent } from '../app.component';
import { LoginService } from '../login.service';
import { User } from '../user/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  preserveWhitespaces: true,
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private apptest: AppComponent
  ) {}

  user: User = new User();
  flag: string = '';
  

  validate() {
    this.loginService
      .validate(this.user)
      .subscribe((response) => (this.user = response));
    this.flag = this.user.role;

    if (this.flag == 'admin') {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('role', 'admin');
      this.router.navigate(['blogslist']);
      this.apptest.role = sessionStorage.getItem('role') || '';
    } else if (this.flag == 'viewer') {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('role', 'viewer');
      sessionStorage.setItem('email',this.user.email);
      this.router.navigate(['blogslist']);
      this.apptest.role = sessionStorage.getItem('role') || '';
    } else {
      sessionStorage.setItem('isLoggedIn', 'false');
    }
  }
}
