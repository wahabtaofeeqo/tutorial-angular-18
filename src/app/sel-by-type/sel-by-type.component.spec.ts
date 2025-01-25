import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelByTypeComponent } from './sel-by-type.component';

describe('SelByTypeComponent', () => {
  let component: SelByTypeComponent;
  let fixture: ComponentFixture<SelByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelByTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
