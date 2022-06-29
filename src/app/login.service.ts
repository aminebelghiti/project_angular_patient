import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login (username:string,password:string)
  {
    const headers=new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password)});
       return this.http.get(environment.backendHost+"/Patient/login",{headers,responseType:'text' as 'json'})
  }

}
