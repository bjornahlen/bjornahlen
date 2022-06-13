import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  constructor (private formbuilder: FormBuilder) {}

userForm = this.formbuilder.group ({
  firstName: [''],
  lastName:[''],
  dateOfbirth: [''],
  education:[''],
start:[''],
end:[''],
})

  ngOnInit(): void {
  }

}
