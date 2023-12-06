import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteAssignmentComponent } from './route-assignment.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../../core/domain/entities/app.state';

describe('RouteAssignmentComponent', () => {
  let component: RouteAssignmentComponent;
  let fixture: ComponentFixture<RouteAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteAssignmentComponent],
      imports: [StoreModule.forRoot(reducers)]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
