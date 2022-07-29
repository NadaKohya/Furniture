import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleHomeComponent } from './style-home.component';

describe('StyleHomeComponent', () => {
  let component: StyleHomeComponent;
  let fixture: ComponentFixture<StyleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
