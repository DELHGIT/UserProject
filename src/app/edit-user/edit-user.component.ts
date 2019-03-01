import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {IUser} from "../model/user.model";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: IUser;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['users/list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      isActive: ['', Validators.required],
      annualSalary: ['', Validators.required],
      gender: new FormControl({value:'',disabled:true},Validators.required),// ['', Validators.required],
      dataOfBirth: [{value:'',disabled:true}, Validators.required]      
    });
    let user = this.userService.getUserById(1);
    if (user !== undefined)     
        this.editForm.setValue(user);

    /*this.userService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });*/
  }

  onSubmit() {
    //this.userService.updateUser(this.editForm.value).
    this.userService.updateUser(this.editForm.value)
      .pipe(
        first()
        )
      .subscribe(
        data => {
          console.log(data);
          this.userService.tmpUser = data as IUser[];
          this.router.navigate(['users/list-user']);
        },
        error => {
          alert(error);
        });
        
  }

}