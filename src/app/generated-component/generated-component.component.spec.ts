import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedComponentComponent } from './generated-component.component';

describe('GeneratedComponentComponent', () => {
  let component: GeneratedComponentComponent;
  let fixture: ComponentFixture<GeneratedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratedComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
