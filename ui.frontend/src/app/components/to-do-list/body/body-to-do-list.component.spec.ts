import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyToDoListComponent } from './body-to-do-list.component';

describe('BodyToDoListComponent', () => {
  let component: BodyToDoListComponent;
  let fixture: ComponentFixture<BodyToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
