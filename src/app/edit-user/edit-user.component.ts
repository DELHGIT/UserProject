import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {IUser} from "../model/user.model";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import { DISABLED } from '@angular/forms/src/model';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: IUser;
  editForm: FormGroup;
  genders:any;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) {
    this.createForm();
    this.genders = [{text:"Male", value:"Male"}, {text:"Female", value:"Female"} ];
   }
   
   createForm() {
    this.editForm = this.formBuilder.group({
      id: new FormControl({value:'',disabled:false}, null),
      _id: new FormControl({value:'',disabled:false}, null),
      __v: new FormControl({value:'',disabled:false}, null),
      email: new FormControl({value:'ed@gmail.fr',disabled:false}, Validators.required),
      firstName: ['', Validators.required],
      lastName: new FormControl({value:'',disabled:false}, Validators.required),
      isActive:new FormControl({value:true,disabled:false}, Validators.required),
      annualSalary: new FormControl({value:0,disabled:false}, Validators.required /*&& Validators.pattern('[1-9]*')*/),
      gender: new FormControl({value:'',disabled:false}, Validators.required),// ['', Validators.required],
      dataOfBirth: [{value:'',disabled:false}, Validators.required]      
    });
   }


  get diagnostic(): string {
    return "HERE: " + JSON.stringify(this.editForm.getRawValue());
}

  ngOnInit() {

    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['users/list-user']);
      return;
    }
   
    let user = this.userService.editUser(userId).subscribe(res => {
      if (res !== undefined)     
        this.editForm.setValue(res);
  })
    
    /*this.userService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });*/
  }


  onSubmit() {
    //this.userService.updateUser(this.editForm.value).
    let userId = localStorage.getItem("editUserId");
    this.userService.updateUser(this.editForm.value ,userId)
      .pipe(
        first()
        )
      .subscribe(
        data => {
          console.log(data);
          this.user = data as IUser;
          this.router.navigate(['users/list-user']);
        },
        error => {
          alert(error);
        });
        
  }

  onClose(){
    this.router.navigate(['users/list-user']);
  }

}