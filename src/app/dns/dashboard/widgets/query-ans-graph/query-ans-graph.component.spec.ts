import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAnsGraphComponent } from './query-ans-graph.component';

describe('QueryAnsGraphComponent', () => {
  let component: QueryAnsGraphComponent;
  let fixture: ComponentFixture<QueryAnsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryAnsGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryAnsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
