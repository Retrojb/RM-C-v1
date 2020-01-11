import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoresFormComponent } from './chores-form.component';

describe('ChoresFormComponent', () => {
  let component: ChoresFormComponent;
  let fixture: ComponentFixture<ChoresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
