import { Component, computed, EventEmitter, input, Output, output } from '@angular/core';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input<Product | any>();
  productValue = computed(() => this.product());

  sold = output<any>({alias: 'productSold'});

  @Output() 
  preview = new EventEmitter<any>()

  fire() {
    this.preview.emit({
      name: 'How to cold in Angular'
    })
  }
}

export interface Product {
  image: string
  name: string
  price: number
}