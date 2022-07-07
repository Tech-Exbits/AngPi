import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryBlockedComponent } from './query-blocked.component';

describe('QueryBlockedComponent', () => {
  let component: QueryBlockedComponent;
  let fixture: ComponentFixture<QueryBlockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryBlockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
