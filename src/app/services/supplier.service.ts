import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private SupplierUrl = 'http://localhost:5217/api/Supplier';

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.SupplierUrl);
  }

  getSupplier(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.SupplierUrl}/${id}`);
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.SupplierUrl, supplier);
  }

  updateSupplier(supplier: Supplier): Observable<void> {
    return this.http.put<void>(`${this.SupplierUrl}/${supplier.id}`, supplier);
  }

  deleteSupplier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.SupplierUrl}/${id}`);
  }
}
