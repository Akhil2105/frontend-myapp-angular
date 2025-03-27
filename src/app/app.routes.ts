import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'add', component: ProductFormComponent },
    { path: '', redirectTo: 'products', pathMatch: 'full' }
];
