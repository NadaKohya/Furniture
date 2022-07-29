import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattressComponent } from './mattress.component';

describe('MattressComponent', () => {
  let component: MattressComponent;
  let fixture: ComponentFixture<MattressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MattressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
