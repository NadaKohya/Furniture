import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestItemComponent } from './best-item.component';

describe('BestItemComponent', () => {
  let component: BestItemComponent;
  let fixture: ComponentFixture<BestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
