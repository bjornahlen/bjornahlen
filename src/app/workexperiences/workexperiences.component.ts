
import { Component, OnInit, Input } from '@angular/core';
import { Workexperiences } from '../workexperience';
import { Observable } from 'rxjs';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-workexperiences',
  templateUrl: './workexperiences.component.html',
  styleUrls: ['./workexperiences.component.scss']
})
export class WorkexperiencesComponent implements OnInit {

  @Input() workExperiences: FormGroup;


  constructor() { }

  ngOnInit(): void {

  }

}
