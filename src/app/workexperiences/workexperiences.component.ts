import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-workexperiences',
  templateUrl: './workexperiences.component.html',
  styleUrls: ['./workexperiences.component.scss']
})
export class WorkexperiencesComponent {

  displayedColumns = ['employer', 'title', 'startdate', 'endddate'];

  @Input() userFormgroup: FormGroup = new FormGroup({});
  @Output() addWorkExperienceCallback = new EventEmitter();

  get workExperiences() {
    return this.userFormgroup.controls['workExperienceFormArray'] as FormArray;
  }

  addWorkExperience() {
    this.addWorkExperienceCallback.emit('hello');
  }
}
