import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardTwoComponent } from './product-card-two.component';

describe('ProductCardTwoComponent', () => {
  let component: ProductCardTwoComponent;
  let fixture: ComponentFixture<ProductCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
