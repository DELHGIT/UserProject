import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUser, User} from "../model/user.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:3300/users'; //'http://localhost:4200/users';
  tmpUser:IUser[];

  constructor(private http: HttpClient) { 
    this.tmpUser = [
      { firstName:"ed1",lastName:"el1",gender:"Male", annualSalary:5500, dataOfBirth:"6/12/1988",  email:"ed1@gmail.com",isActive:true, id:1},
      { firstName:"ed2",lastName:"el2",gender:"Female",annualSalary:5500, dataOfBirth:"12/12/1985", email:"ed2@gmail.com",isActive:true, id:2},
      { firstName:"ed3",lastName:"el3",gender:"Male",annualSalary:4200, dataOfBirth:"9/10/2012", email:"ed3@gmail.com",isActive:false, id:3},
      { firstName:"ed4",lastName:"el4",gender:"Female",annualSalary:3500, dataOfBirth:"11/11/2014", email:"ed4@gmail.com",isActive:true, id:4},
      { firstName:"ed5",lastName:"el5",gender:"Male",annualSalary:50000, dataOfBirth:"4/24/1985", email:"ed5@gmail.com",isActive:false, id:5},
      { firstName:"ed6",lastName:"el6",gender:"Male",annualSalary:25000, dataOfBirth:"5/26/1974", email:"ed6@gmail.com",isActive:true, id:6}
    ];
  }

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