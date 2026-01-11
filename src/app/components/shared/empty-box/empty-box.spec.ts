import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBox } from './empty-box';

describe('EmptyBox', () => {
  let component: EmptyBox;
  let fixture: ComponentFixture<EmptyBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
