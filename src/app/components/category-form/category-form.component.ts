import { AppComponent } from './../../app.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService, Category } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  category: Category = {
    name: '',
    description: ''
  };
  isEditMode = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private AppComponent: AppComponent
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;
      this.categoryService.getCategory(+id).subscribe((data: Category) => {
        this.category = data;
      });
    }
  }

  submitCategory() {
    if (!this.category.name) {
      this.AppComponent.showToast("Category name is required");
      return;
    }

    if (this.isEditMode) {
      this.categoryService.updateCategory(this.category).subscribe(() => {
        this.AppComponent.showToast('Category updated!');
        this.router.navigate(['/categories']);
      });
    } else {
      this.categoryService.addCategory(this.category).subscribe(() => {
        this.AppComponent.showToast('Category added!');
        this.router.navigate(['/categories']);
      });
    }
  }
}
