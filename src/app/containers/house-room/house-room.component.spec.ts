import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRoomComponent } from './house-room.component';

describe('HouseRoomComponent', () => {
  let component: HouseRoomComponent;
  let fixture: ComponentFixture<HouseRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
