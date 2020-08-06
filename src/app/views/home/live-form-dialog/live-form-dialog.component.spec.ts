import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFormDialogComponent } from './live-form-dialog.component';

describe('LiveFormDialogComponent', () => {
  let component: LiveFormDialogComponent;
  let fixture: ComponentFixture<LiveFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
