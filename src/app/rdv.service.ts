import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rdv} from './model/rdv.model'
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private http: HttpClient) {}
    public saveRdv(rdv:Rdv) : Observable<Rdv>{
     return this.http.post<Rdv>(environment.backendHost + '/rdv/add', rdv);
    }
  }

