import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {IUser} from "../model/user.model";
import { CustomeCurrencyPipe } from '../common/pipes/currencyPipe.pipe';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'] ,
  providers: [ CustomeCurrencyPipe ]
})
export class ListUserComponent implements OnInit {

  users: IUser[];
  tmpUser:IUser[];
  

  constructor(private router: Router, private userService: UserService,public customeCurrencyPipe: CustomeCurrencyPipe) { 
    this.tmpUser = [
      { firstName:"ed1",lastName:"el1",gender:"Male", annualSalary:5500, dataOfBirth:"6/12/1988",  email:"ed1@gmail.com", id:1},
      { firstName:"ed2",lastName:"el2",gender:"Female",annualSalary:5500, dataOfBirth:"12/12/1985", email:"ed2@gmail.com", id:2},
      { firstName:"ed3",lastName:"el3",gender:"Male",annualSalary:4200, dataOfBirth:"9/10/2012", email:"ed3@gmail.com", id:3},
      { firstName:"ed4",lastName:"el4",gender:"Female",annualSalary:3500, dataOfBirth:"11/11/2014", email:"ed4@gmail.com", id:4},
      { firstName:"ed5",lastName:"el5",gender:"Male",annualSalary:50000, dataOfBirth:"4/24/1985", email:"ed5@gmail.com", id:5},
      { firstName:"ed6",lastName:"el6",gender:"Male",annualSalary:25000, dataOfBirth:"5/26/1974", email:"ed6@gmail.com", id:6}
  
    ]
  }

  ngOnInit() {
    return this.tmpUser;
    /*this.userService.getUsers()
      .subscribe( data => {
        this.users = (data as IUser[] ;
      });*/
  }

  deleteUser(user: IUser): void {
    this.userService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: IUser): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['users/edit-user']);
  };

  addUser(): void {
    this.router.navigate(['users/add-user']);
  };
  ///  filter methods
  getAllUserCount():number{
    return (this.users ||  this.tmpUser).length;
  }

  ///  filter methods
  getMalUserCount():number{
    return (this.users ||  this.tmpUser).filter(user=>user.gender ==="Male").length;
  }

  
  ///  filter methods
  getFemalUserCount():number{
    return (this.users ||  this.tmpUser).filter(user=>user.gender ==="Female").length;
  }

  selectedUserCountRB:string ="All";

  onUserRBChange(rbValue:string):void{
    this.selectedUserCountRB = rbValue;
  }
}