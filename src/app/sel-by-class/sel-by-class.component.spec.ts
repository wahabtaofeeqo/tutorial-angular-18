import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelByClassComponent } from './sel-by-class.component';

describe('SelByClassComponent', () => {
  let component: SelByClassComponent;
  let fixture: ComponentFixture<SelByClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelByClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelByClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
