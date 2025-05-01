import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';

export const routes: Routes = [
    { path: 'categories', component: CategoryListComponent },
    { path: 'add-category', component: CategoryFormComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'add', component: ProductFormComponent },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'categories', component: CategoryListComponent },
    { path: 'edit-category/:id', component: CategoryFormComponent },

];
