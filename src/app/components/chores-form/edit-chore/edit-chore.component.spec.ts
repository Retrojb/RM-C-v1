import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChoreComponent } from './edit-chore.component';

describe('EditChoreComponent', () => {
  let component: EditChoreComponent;
  let fixture: ComponentFixture<EditChoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
