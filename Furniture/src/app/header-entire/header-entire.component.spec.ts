import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEntireComponent } from './header-entire.component';

describe('HeaderEntireComponent', () => {
  let component: HeaderEntireComponent;
  let fixture: ComponentFixture<HeaderEntireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEntireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEntireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
