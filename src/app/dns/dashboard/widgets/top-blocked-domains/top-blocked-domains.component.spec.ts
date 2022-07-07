import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBlockedDomainsComponent } from './top-blocked-domains.component';

describe('TopBlockedDomainsComponent', () => {
  let component: TopBlockedDomainsComponent;
  let fixture: ComponentFixture<TopBlockedDomainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBlockedDomainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBlockedDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
