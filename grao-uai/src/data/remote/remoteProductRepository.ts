import { Product } from "../../domain/entities";
import { ProductNotFoundError } from "../../domain/erros/product-not-found-error";
import { ProductRepository } from "../../domain/services/protocols/productRepository";

class RemoteProductRepository extends ProductRepository {
    async getAll(): Promise<Product[]> {
        const response = await fetch(`linkAPI`);
        const data = await response.json();

        if (data.Error) {
            throw new ProductNotFoundError('Produto não encontrado');
        }

        return this.toCollection(Object.values(data));
    };

    private toProductEntity(data: any): Product {
        return {
            Image: data.Image,
            Name: data.Name,
            Price: data.Price,
        }
    }

    private toCollection(data: any[]): Product[] {
        return data.map(
            (dataItem) => this.toProductEntity(dataItem)
        )
    }
}

export default RemoteProductRepository;