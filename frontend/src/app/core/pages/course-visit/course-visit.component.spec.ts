import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseVisitComponent } from './course-visit.component';

describe('CourseVisitComponent', () => {
  let component: CourseVisitComponent;
  let fixture: ComponentFixture<CourseVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseVisitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
