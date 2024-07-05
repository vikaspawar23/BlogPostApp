import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  validate(email: string, password: string) {
    if (email == 'admin@gmail.com' && password == 'admin@123') {
      return true;
    } else {
      return false;
    }
  }

  getAllUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/api/user');
  }
}

