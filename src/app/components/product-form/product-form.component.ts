import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  product: Product = {
    name: '',
    price: 0,
    category: ''
  };

  constructor(private productService: ProductService) { }

  submitProduct() {
    this.productService.createProduct(this.product).subscribe(() => {
      alert('Product added!');
      this.product = { name: '', price: 0, category: '' };
    });
  }
}
