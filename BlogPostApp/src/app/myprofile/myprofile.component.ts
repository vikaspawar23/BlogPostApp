import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user/services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myprofile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnInit {

  user: User = new User();
  editing: boolean = false;
  email:string=''
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail !== null) {
      this.email = storedEmail;
    }

    this.userService.myProfile(this.email).subscribe(response => this.user = response);

  }

  toggleEdit(): void {
    this.editing = !this.editing;
  }

  saveChanges(): void {
    // Save changes to backend
    // Example:
    // this.userService.updateUser(this.user).subscribe(() => {
    //   console.log('User updated successfully');
    // });
    this.editing = false;
  }

  deleteProfile(): void {
    // Delete user profile from backend
    // Example:
    // this.userService.deleteUser(this.user.id).subscribe(() => {
    //   console.log('User deleted successfully');
    // });
  }

}
