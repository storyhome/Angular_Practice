import { Component } from '@angular/core';
import { IProduct } from 'src/product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  public product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      description:
      "A friendly robot head with two eyes and a smile -- great for domestic use.",
      name: "Friendly Bot",
      imageName: "head-friendly.png",
      category: "Heads",
      price: 945.0,
      discount: 0.2,
    };
  }

   getImageUrl(product: IProduct){
    return '/assets/images/robot-parts/' + product.imageName;
  }

}