import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: object) {
    return this.http.post<object>(`/auth/api`, data);
  }
}
