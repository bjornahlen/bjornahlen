import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray,FormGroup,FormControl } from '@angular/forms';
import { UseradminService } from '../useradmin.service';
import { Router } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { MatRadioButton } from '@angular/material/radio';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})


export class UserformComponent implements OnInit{

workexperienceactive: boolean = false;
educationactive: boolean = false;

constructor (private fb: FormBuilder, private userAdminservice: UseradminService, private router: Router) {}


userForm = this.fb.group ({
  firstName: [''],
  lastName:[''],
  dateOfBirth: [''],
  gender: [''],
  isMarried: [''],
  role: [''],
  eduction: this.fb.array([]),
workExperience: this.fb.array([]),

})

  ngOnInit(): void {
  }

  onSubmit() {

    this.userAdminservice.createUser(this.userForm.value).subscribe();

    console.log(this.userForm.value);
    console.log('user was saved');

  }


}

