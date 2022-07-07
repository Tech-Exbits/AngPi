import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPermittedDomainsComponent } from './top-permitted-domains.component';

describe('TopPermittedDomainsComponent', () => {
  let component: TopPermittedDomainsComponent;
  let fixture: ComponentFixture<TopPermittedDomainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPermittedDomainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPermittedDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
