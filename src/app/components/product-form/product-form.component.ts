import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../../models/supplier.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product: Product = {
    name: '',
    category: { id: 0, name: '', description: '' },
    price: 0,
    quantityInStock: 0,
    supplier: { id: 0, name: '', email: '', phone: '' }
  };
  isEditMode = false;
  categories: any[] = [];
  suppliers: Supplier[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private AppComponent: AppComponent,
    private http: HttpClient
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    this.getCategories();
    this.getSuppliers();

    if (id) {
      this.isEditMode = true;
      this.productService.getProduct(+id).subscribe((data: Product) => {
        this.product = data;
      });
    }
  }

  getCategories() {
    this.http.get<any[]>('http://localhost:5217/api/Category').subscribe(data => {
      this.categories = data;
    });
  }

  getSuppliers() {
    this.http.get<Supplier[]>('http://localhost:5217/api/Supplier').subscribe(data => {
      this.suppliers = data;
    });
  }

  submitProduct() {
    const payload = {
      name: this.product.name,
      price: this.product.price,
      quantityInStock: this.product.quantityInStock,
      categoryId: this.product.category.id,
      supplierId: this.product.supplier.id
    };
    if (!this.product.name) {
      this.AppComponent.showToast("Product name is required");
      return;
    }

    if (this.isEditMode) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.AppComponent.showToast('Product updated!');
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.createProduct(this.product).subscribe(() => {
        this.AppComponent.showToast('Product added!');
        this.router.navigate(['/products']);
      });
    }
  }
}
