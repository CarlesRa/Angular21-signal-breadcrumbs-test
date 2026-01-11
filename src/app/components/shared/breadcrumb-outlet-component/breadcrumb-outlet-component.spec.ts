import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbOutletComponent } from './breadcrumb-outlet-component';

describe('BreadcrumbOutletComponent', () => {
  let component: BreadcrumbOutletComponent;
  let fixture: ComponentFixture<BreadcrumbOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbOutletComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
