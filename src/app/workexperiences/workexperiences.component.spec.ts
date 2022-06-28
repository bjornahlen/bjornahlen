import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexperiencesComponent } from './workexperiences.component';

describe('WorkexperiencesComponent', () => {
  let component: WorkexperiencesComponent;
  let fixture: ComponentFixture<WorkexperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkexperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkexperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
