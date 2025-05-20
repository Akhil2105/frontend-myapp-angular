import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private AppComponent: AppComponent
  ) { }
  searchTerm = '';
  filteredCategories: Category[] = [];

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
      this.filteredCategories = data; // ✅ keep original + filtered list
    });
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredCategories = this.categories.filter(c =>
      c.name.toLowerCase().includes(term) ||
      (c.description?.toLowerCase().includes(term) ?? false)
    );
  }

  deleteCategory(id: number) {
    this.AppComponent.showConfirm('Delete this category?', () => {
      this.categoryService.deleteCategory(id).subscribe(() => {
        this.filteredCategories = this.filteredCategories.filter(c => c.id !== id);
        this.AppComponent.showToast('Category deleted!');
      });
    });
  }


}
