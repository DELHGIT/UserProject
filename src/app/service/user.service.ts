import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUser, User} from "../model/user.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3300/users'; //'http://localhost:4200/users';
  tmpUser:IUser[];
  /*getUsers() {
    return this.http.get<IUser[]>(this.baseUrl);
  }*/

   getUsers() {
    return this.http.get(`${this.baseUrl}`);
}

  getUserById(id: number):IUser {
    //return this.http.get<IUser>(this.baseUrl + '/' + id);
    return this.tmpUser[0] ;
  }

  editUser(id) {
    return this.http.get(`${this.baseUrl}/edit/${id}`);
    }

  /*createUser(user: IUser) {
    return this.http.post(this.baseUrl, user);
  }*/

  createUser(user: IUser) {
    return this.http.post(`${this.baseUrl}/add`, user);
  }

  updateUser(user: IUser) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}