import { Product } from "../../entities";

export abstract class ProductRepository {
    abstract getAll(): Promise<Product[]>;
}