import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionDetailComponent } from './participacion-detail.component';

describe('ParticipacionDetailComponent', () => {
  let component: ParticipacionDetailComponent;
  let fixture: ComponentFixture<ParticipacionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
