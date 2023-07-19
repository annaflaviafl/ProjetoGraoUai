import { Product } from "../entities";
import { ProductRepository } from "./protocols/productRepository";

class FindProductService {
    constructor(private readonly repo: ProductRepository) { }

    async getProduct(): Promise<Product[]> {
        const products = await this.repo.getAll();
        return products;
    }
}

export default FindProductService;