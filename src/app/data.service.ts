import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //URL: string ="http://localhost:8080/"
 // httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  public loginUserForRemote(user:any):Observable<any>
  {
    return this.http.post<String>('http://localhost:8080/login',user);
  }

  public registerUserForRemote(user:any):Observable<any>
  {
    return this.http.post<String>('http://localhost:8080/register',user);
  }
}
