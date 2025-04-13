import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService, Category } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categry-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {
  category: Category = {
    name: '',
    description: ''
  };
  constructor(private categoryService: CategoryService, private router: Router) { }
  submitCategory() {
    if (!this.category.name) {
      alert("Category name is required");
      return;
    }
    this.categoryService.addCategory(this.category).subscribe(() => {
      alert('Category added!');
      this.router.navigate(['/categories']);
    });
  }
}
