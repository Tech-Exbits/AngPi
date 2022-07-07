import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocklistDomainsComponent } from './blocklist-domains.component';

describe('BlocklistDomainsComponent', () => {
  let component: BlocklistDomainsComponent;
  let fixture: ComponentFixture<BlocklistDomainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocklistDomainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocklistDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
