import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  register(user: User) {
    return this.httpClient.post<void>('http://localhost:8080/api/user', user);
  }
  myProfile(email:string) {
    return this.httpClient.get<User>('http://localhost:8080/api/user/getmyprofile/'+email);
  }
}

export class User {
  email: string = '';
  password: string = '';
  mobileNumber: string = '';
  role: string = '';
}
