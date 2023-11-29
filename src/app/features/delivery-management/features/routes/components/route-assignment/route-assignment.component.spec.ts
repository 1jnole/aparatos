import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAssignmentComponent } from './route-assignment.component';

describe('RouteAssignmentComponent', () => {
  let component: RouteAssignmentComponent;
  let fixture: ComponentFixture<RouteAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteAssignmentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
