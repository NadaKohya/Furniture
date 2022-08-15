import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherslayoutComponent } from './otherslayout.component';

describe('OtherslayoutComponent', () => {
  let component: OtherslayoutComponent;
  let fixture: ComponentFixture<OtherslayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherslayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
