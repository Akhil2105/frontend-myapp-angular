import { Category } from "./category.model";
import { Supplier } from "./supplier.model";

export interface Product {
    id?: number;
    name: string;
    category: Category;
    quantityInStock: number;
    price: number;
    supplier: Supplier;
}
