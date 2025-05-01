import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  id?: number;
  name: string;
  description?: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private CategoryUrl = 'http://localhost:5217/api/Category';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.CategoryUrl);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.CategoryUrl, category);
  }

  deleteCategory(id: number):
    Observable<void> {
    return this.http.delete<void>(`${this.CategoryUrl}/${id}`);
  }
  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.CategoryUrl}/${id}`);
  }


  updateCategory(category: Category): Observable<void> {
    return this.http.put<void>(`${this.CategoryUrl}/${category.id}`, category);
  }
}