import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UseradminService } from '../useradmin.service';
import { Router } from '@angular/router';
import { FormArray } from '@angular/forms';
import { WorkexperiencesComponent } from '../workexperiences/workexperiences.component';



@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})


export class UserformComponent implements OnInit {

  workexperienceactive: boolean = false;
  educationactive: boolean = false;
  response: string = '';
  submitted = false;

  constructor(private fb: FormBuilder, private userAdminservice: UseradminService, private router: Router) { }


  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    gender: ['', Validators.required],
    isMarried: ['true', Validators.required],
    role: ['', Validators.required],
    education: this.fb.array([]),
    workExperiences: this.fb.array([]),
  })

  createWorkExperience() {
    return this.fb.group({
      employer: ['', Validators.required],
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    })
  }

  addWorkExperience() {
    
  }



  /*
  addWorkexperience() {
  this.workExperience.push(experienceForm);
  
  }
  */
  ngOnInit(): void {
    console.log(this.submitted);
  }

  onSubmit() {

    this.userAdminservice.createUser(this.userForm.value).subscribe({
      next: (value) => {
        this.response = "User was saved";
      }, error: (err) => {
        this.response = err;
      },
    });

    console.log(this.userForm.value);

    this.submitted = true;

  }

  public handleError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };

  public reload() {
    this.userForm.reset();
  }






}
