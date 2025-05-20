import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StockMovementService } from '../../services/stock-movement.services';
import { StockMovement } from '../../models/stock-movement.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-movement-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-movement-list.component.html',
  styleUrl: './stock-movement-list.component.css'
})
export class StockMovementListComponent implements OnInit {
  movements: StockMovement[] = [];

  constructor(private stockMovementService: StockMovementService) { }

  ngOnInit() {
    this.stockMovementService.getMovements().subscribe(data => {
      this.movements = data;
    });
  }
}
