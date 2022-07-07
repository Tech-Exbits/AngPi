import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopClientsBlockedComponent } from './top-clients-blocked.component';

describe('TopClientsBlockedComponent', () => {
  let component: TopClientsBlockedComponent;
  let fixture: ComponentFixture<TopClientsBlockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopClientsBlockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopClientsBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
