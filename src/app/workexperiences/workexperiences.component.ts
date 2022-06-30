
import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-workexperiences',
  templateUrl: './workexperiences.component.html',
  styleUrls: ['./workexperiences.component.scss']
})
export class WorkexperiencesComponent {

  displayedColumns = ['employer', 'title', 'startdate', 'endddate'];

  @Input() userFormgroup: FormGroup = new FormGroup({});
  @Output() addWorkExperienceCallback = new EventEmitter();

ngOnInit (){
  
}

  get workExperiences() {
    return this.userFormgroup.controls['workExperienceFormArray'] as FormArray;
  }

  addWorkExperience() {
    this.addWorkExperienceCallback.emit('hello');
  }

  
}
