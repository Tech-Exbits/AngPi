import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPercentComponent } from './query-percent.component';

describe('QueryPercentComponent', () => {
  let component: QueryPercentComponent;
  let fixture: ComponentFixture<QueryPercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryPercentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
