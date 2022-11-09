import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToDoListComponent } from './header-to-do-list.component';

describe('HeaderToDoListComponent', () => {
  let component: HeaderToDoListComponent;
  let fixture: ComponentFixture<HeaderToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
