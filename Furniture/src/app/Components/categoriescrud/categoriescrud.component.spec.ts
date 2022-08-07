import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriescrudComponent } from './categoriescrud.component';

describe('CategoriescrudComponent', () => {
  let component: CategoriescrudComponent;
  let fixture: ComponentFixture<CategoriescrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriescrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriescrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
