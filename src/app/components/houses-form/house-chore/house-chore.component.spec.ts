import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseChoreComponent } from './house-chore.component';

describe('HouseChoreComponent', () => {
  let component: HouseChoreComponent;
  let fixture: ComponentFixture<HouseChoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseChoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseChoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
