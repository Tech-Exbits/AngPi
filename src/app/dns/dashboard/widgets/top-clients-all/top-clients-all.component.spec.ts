import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopClientsAllComponent } from './top-clients-all.component';

describe('TopClientsAllComponent', () => {
  let component: TopClientsAllComponent;
  let fixture: ComponentFixture<TopClientsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopClientsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopClientsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
