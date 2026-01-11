import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBase } from './products-base';

describe('ProductsBase', () => {
  let component: ProductsBase;
  let fixture: ComponentFixture<ProductsBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsBase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
