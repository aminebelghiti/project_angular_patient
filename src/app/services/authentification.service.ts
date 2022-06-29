import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private users = [
    {username: 'admin', password: '1234', roles: ['ADMIN', 'USER']},
    {username: 'amine', password: '1234', roles: ['USER']},
    {username: 'abdo', password: '1234', roles: ['USER']}
  ];
  public isAuthenticated: boolean;
  public userAuthenticated;

  constructor() { }
  public login(username: string, password: string) {
    let user = undefined;
    this.users.forEach(u => {
      if (u.username == username && u.password == password) {
        user = u;
      }});
    if (user) {
      this.isAuthenticated = true;
      this.userAuthenticated = user;
    } else {
      this.isAuthenticated = false;
      this.userAuthenticated = undefined;
    }
  }
}
