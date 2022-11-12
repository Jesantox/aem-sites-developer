import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationChannelsComponent } from './presentation-channels.component';

describe('PresentationChannelsComponent', () => {
  let component: PresentationChannelsComponent;
  let fixture: ComponentFixture<PresentationChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
