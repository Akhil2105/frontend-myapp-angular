import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService, Category } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService:
    CategoryService) { }
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      console.log('Fetched categories:', data);
      this.categories = data;
    });
  }
  deleteCategory(id: number) {
    if (confirm("Delete this category?")) {
      this.categoryService.deleteCategory(id).subscribe(() => {
        this.categories = this.categories.filter(c => c.id !== id);
      });
    }
  }

}
