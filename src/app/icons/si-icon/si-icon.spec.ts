import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiIcon } from './si-icon';

describe('SiIcon', () => {
  let component: SiIcon;
  let fixture: ComponentFixture<SiIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
