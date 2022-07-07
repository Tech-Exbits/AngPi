import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTotalComponent } from './query-total.component';

describe('QueryTotalComponent', () => {
  let component: QueryTotalComponent;
  let fixture: ComponentFixture<QueryTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
