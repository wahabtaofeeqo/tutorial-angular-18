import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test.component';
import { DemoComponent } from './demo/demo.component';
import { SelByTypeComponent } from './sel-by-type/sel-by-type.component';
import { SelByAttrComponent } from './sel-by-attr/sel-by-attr.component';
import { SelByClassComponent } from './sel-by-class/sel-by-class.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCardTwoComponent } from './product-card-two/product-card-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TestComponent,
    DemoComponent,
    SelByAttrComponent,
    SelByTypeComponent,
    SelByClassComponent,
    ProductCardComponent,
    ProductCardTwoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'first-app';
  product = {
    price: 1000,
    name: 'HD Camera',
    image: 'assets/camera.jpg'
  }
  
  ngOnInit(): void {}

  handler(data: any) {
    console.log('Sold', data);
  }
}
