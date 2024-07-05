import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user/services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  validate(user:User): Observable<User> {
    return this.httpClient.post<User>("http://localhost:8080/api/user/validate",user);
  }
}
