import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCurrentTrainingComponent } from './new-current-training.component';

describe('NewCurrentTrainingComponent', () => {
  let component: NewCurrentTrainingComponent;
  let fixture: ComponentFixture<NewCurrentTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCurrentTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCurrentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
