import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelByAttrComponent } from './sel-by-attr.component';

describe('SelByAttrComponent', () => {
  let component: SelByAttrComponent;
  let fixture: ComponentFixture<SelByAttrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelByAttrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelByAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
