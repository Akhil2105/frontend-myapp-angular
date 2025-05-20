export interface StockMovement {
    id?: number;
    productId: number;
    type: 'IN' | 'OUT';
    quantity: number;
    timestamp?: Date;
}
