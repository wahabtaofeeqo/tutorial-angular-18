import { Component, Input } from '@angular/core';
import { Product } from '../product-card/product-card.component';

@Component({
  selector: 'product-card-two',
  standalone: true,
  imports: [],
  templateUrl: './product-card-two.component.html',
  styleUrl: './product-card-two.component.css'
})
export class ProductCardTwoComponent {

  @Input()
  product!: Product
}
