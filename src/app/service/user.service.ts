import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {IUser, User} from "../model/user.model";
import { HttpHeaders } from '@angular/common/http';
import { HandleError, UserErrorHandler } from './error-handler.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:3300/users'; //'http://localhost:4200/users';
  tmpUser:IUser[];
  private handleError: HandleError;

  constructor(private http: HttpClient, errorHandler:UserErrorHandler) { 
    this.handleError = errorHandler.createHandleError('UserService');
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
    return this.http.get(`${this.baseUrl}`)
    .pipe(
      catchError(this.handleError('getUsers', []))
      );
}

  getUserById(id: number) {
    return this.http.get<IUser>(this.baseUrl + '/' + id);
    //return this.tmpUser.filter(x=>x.id === id)[0] ;
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

  updateUser(user: IUser,userId:any):Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/update/${userId}`, user);

    /*const headers = new HttpHeaders().set("Content-Type", "application/json");
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', '*');
    headers.set('Access-Control-Allow-Headers', '*');
    return this.http.put(`${this.baseUrl}/update/${userId}`, user, {headers});
   return this.http.put(`${this.baseUrl}/1`, user, {headers});

   //return this.http.put(`${this.baseUrl}/update/${userId}`, user);*/
  }

  deleteUser(id) {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }
}