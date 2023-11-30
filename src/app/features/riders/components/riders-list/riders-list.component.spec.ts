import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidersListComponent } from './riders-list.component';

describe('RidersListComponent', () => {
  let component: RidersListComponent;
  let fixture: ComponentFixture<RidersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RidersListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RidersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
