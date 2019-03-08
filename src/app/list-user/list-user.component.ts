import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {IUser} from "../model/user.model";
import { CustomeCurrencyPipe } from '../common/pipes/currencyPipe.pipe';
import _ from "lodash";
import { i18n } from '@angular/core/src/render3';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'] ,
  providers: [ CustomeCurrencyPipe ]
})
export class ListUserComponent implements OnInit {

  users: IUser[];
  
  constructor(private router: Router, private userService: UserService,public customeCurrencyPipe: CustomeCurrencyPipe) { 
  //this.users = this.userService.tmpUser;
  }

  ngOnInit() {
    let json = JSON.stringify(this.users);
     console.log(json);
     _.isEmpty({});
    //return this.users;
    this.userService.getUsers()
      .subscribe( data => {
        this.users = (data as IUser[] );
      })
      ;
  }

  deleteUser(user: IUser): void {
    this.userService.deleteUser(user["_id"])
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: IUser): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user["_id"].toString());
    this.router.navigate(['users/edit-user']);
  };

  addUser(): void {
    this.router.navigate(['users/add-user']);
  };
  ///  filter methods
  getAllUserCount():number{
    return (this.users || []  ).length;
  }

  ///  filter methods
  getMalUserCount():number{
    return (this.users || []  ).filter(user=>user.gender ==="Male").length;
  }

  
  ///  filter methods
  getFemalUserCount():number{
    return (this.users || []  ).filter(user=>user.gender ==="Female").length;
  }

  selectedUserCountRB:string ="All";

  onUserRBChange(rbValue:string):void{
    this.selectedUserCountRB = rbValue;
  }
}