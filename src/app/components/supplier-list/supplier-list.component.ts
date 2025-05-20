import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier.model';

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  suppliers: Supplier[] = [];
  filteredSuppliers: Supplier[] = [];
  searchTerm = '';

  constructor(
    private supplierService: SupplierService,
    private AppComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.supplierService.getSuppliers().subscribe(data => {
      this.suppliers = data;
      this.filteredSuppliers = data;
    });
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredSuppliers = this.suppliers.filter(s =>
      s.name.toLowerCase().includes(term) ||
      s.email?.toLowerCase().includes(term) ||
      s.phone?.toLowerCase().includes(term)
    );
  }

  deleteSupplier(id: number): void {
    this.AppComponent.showConfirm('Delete this supplier?', () => {
      this.supplierService.deleteSupplier(id).subscribe(() => {
        this.filteredSuppliers = this.filteredSuppliers.filter(s => s.id !== id);
        this.AppComponent.showToast('Supplier deleted!');
      });
    });
  }
}
