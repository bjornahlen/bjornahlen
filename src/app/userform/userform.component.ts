import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UseradminService } from '../useradmin.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})


export class UserformComponent implements OnInit {

  workexperienceactive: boolean = false;
  educationactive: boolean = false;
  response: string = '';

  constructor(private fb: FormBuilder, private userAdminservice: UseradminService, private router: Router) { }


  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    gender: ['', Validators.required],
    isMarried: ['true', Validators.required],
    role: ['', Validators.required],
    education: this.fb.array([]),
    workExperience: this.fb.array([]),

  })

  ngOnInit(): void {
  }



  onSubmit() {

    this.userAdminservice.createUser(this.userForm.value).subscribe({ 
      next: (value) => {
      this.response = "User was saved";
    }, error: (err) => {
      this.response = err;
    },});

    console.log(this.userForm.value);
    

  }

  public handleError = (controlName: string, errorName: string) => {
  return this.userForm.controls[controlName].hasError(errorName);
};


}

