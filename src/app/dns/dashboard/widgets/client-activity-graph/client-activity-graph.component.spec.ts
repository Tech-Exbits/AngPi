import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientActivityGraphComponent } from './client-activity-graph.component';

describe('ClientActivityGraphComponent', () => {
  let component: ClientActivityGraphComponent;
  let fixture: ComponentFixture<ClientActivityGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientActivityGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientActivityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
