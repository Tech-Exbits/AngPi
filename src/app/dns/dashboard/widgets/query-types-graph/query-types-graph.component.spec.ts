import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTypesGraphComponent } from './query-types-graph.component';

describe('QueryTypesGraphComponent', () => {
  let component: QueryTypesGraphComponent;
  let fixture: ComponentFixture<QueryTypesGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryTypesGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryTypesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
