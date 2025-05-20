import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupplierService } from '../../services/supplier.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Supplier } from '../../models/supplier.model';

@Component({
  selector: 'app-supplier-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent {
  supplier: Supplier = {
    name: '',
    email: '',
    phone: ''
  };
  isEditMode = false;

  constructor(
    private supplierService: SupplierService,
    private router: Router,
    private route: ActivatedRoute,
    private AppComponent: AppComponent
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.supplierService.getSupplier(+id).subscribe((data: Supplier) => {
        this.supplier = data;
      });
    }
  }

  submitSupplier() {
    if (!this.supplier.name) {
      this.AppComponent.showToast('Supplier name is required');
      return;
    }

    if (this.isEditMode) {
      this.supplierService.updateSupplier(this.supplier).subscribe(() => {
        this.AppComponent.showToast('Supplier updated!');
        this.router.navigate(['/suppliers']);
      });
    } else {
      this.supplierService.addSupplier(this.supplier).subscribe(() => {
        this.AppComponent.showToast('Supplier added!');
        this.router.navigate(['/suppliers']);
      });
    }
  }
}
