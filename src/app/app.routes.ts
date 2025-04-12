import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'add', component: ProductFormComponent },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'categories', component: CategoryListComponent }

];
