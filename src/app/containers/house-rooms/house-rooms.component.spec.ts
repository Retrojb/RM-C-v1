import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRoomsComponent } from './house-rooms.component';

describe('HouseRoomsComponent', () => {
  let component: HouseRoomsComponent;
  let fixture: ComponentFixture<HouseRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
