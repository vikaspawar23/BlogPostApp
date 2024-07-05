import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { User } from '../../../user/services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css',
  preserveWhitespaces:true
  
})
export class UserslistComponent implements OnInit {
 
  users:User[]=[]


  constructor(private adminService:AdminService){}
  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe(response => this.users=response);
  }

}
