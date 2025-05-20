import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockMovement } from '../models/stock-movement.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StockMovementService {
    private apiUrl = 'http://localhost:5217/api/StockMovement';

    constructor(private http: HttpClient) { }

    addMovement(movement: StockMovement): Observable<StockMovement> {
        return this.http.post<StockMovement>(this.apiUrl, movement);
    }

    getMovements(): Observable<StockMovement[]> {
        return this.http.get<StockMovement[]>(this.apiUrl);
    }
}
