import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterPageComponent } from './outer-page.component';

describe('OuterPageComponent', () => {
  let component: OuterPageComponent;
  let fixture: ComponentFixture<OuterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
