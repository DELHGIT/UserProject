import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  addForm: FormGroup;
  genders:any;
  selectedValue:string = null;
  ngOnInit() {

    this.genders = [
      {text:"Male", value:"Male"},
      {text:"Female", value:"Female"}
    ];
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      isActive: ['', Validators.required],
      dataOfBirth:new FormControl({value:'',disabled:false}, Validators.required),
      annualSalary: new FormControl({value:0,disabled:false}, Validators.required /*&& Validators.pattern('/^\d{5}$/')*/),
      gender: new FormControl({value:'',disabled:false}, Validators.required),// ['', Validators.required]
    }); 

  }

  onSubmit() {
    this.userService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['users/list-user']);
      });
  }

  get diagnostic(): string {
    return "HERE: " + JSON.stringify(this.addForm.getRawValue());
}

}
