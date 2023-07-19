import { imageDoceAroma, imageExpresso, imageSerraDourada } from "../../assets/produtos";
import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/services/protocols/productRepository";

const products: Product[] = [
    { "Image": imageDoceAroma, "Name": "Doce Aroma", "Price": 15 },
    { "Image": imageExpresso, "Name": "Expresso", "Price": 20 },
    { "Image": imageSerraDourada, "Name": "Serra Dourada", "Price": 25 },
];

export class FakeProdutoRepository extends ProductRepository {
    async getAll(): Promise<Product[]> {
        return products;
    }
}