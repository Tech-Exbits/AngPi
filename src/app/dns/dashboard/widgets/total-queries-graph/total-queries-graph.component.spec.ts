import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalQueriesGraphComponent } from './total-queries-graph.component';

describe('TotalQueriesGraphComponent', () => {
  let component: TotalQueriesGraphComponent;
  let fixture: ComponentFixture<TotalQueriesGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalQueriesGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalQueriesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
