import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { MEAT_API } from './../../app.api';
import { UserModel } from './user.model';

@Injectable()
export class LoginService {
  user: UserModel;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<UserModel> {
    return this.http
      .post<UserModel>(`${MEAT_API}/login`, { email: email, password: password })
      .do(user => this.user = user);
  }

  handleLogin(path: string) {
    this.router.navigate(['/login', path]);
  }
}
