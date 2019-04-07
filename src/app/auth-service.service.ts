import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials.model'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: Credentials) {
    return this.http.post(`localhost:8080/auth/login`, data);
  }
}
