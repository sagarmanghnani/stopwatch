import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapsManagerComponent } from './laps-manager.component';

describe('LapsManagerComponent', () => {
  let component: LapsManagerComponent;
  let fixture: ComponentFixture<LapsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LapsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
