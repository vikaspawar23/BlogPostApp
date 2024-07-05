import { Component } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: User = new User();

  constructor(private router:Router ,private userservice: UserService) {}

  register() {
    this.userservice.register(this.user).subscribe();
    
    this.router.navigate(['login'])
  }
}
