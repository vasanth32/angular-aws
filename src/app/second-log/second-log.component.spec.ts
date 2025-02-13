import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLogComponent } from './second-log.component';

describe('SecondLogComponent', () => {
  let component: SecondLogComponent;
  let fixture: ComponentFixture<SecondLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
