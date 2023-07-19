import React, { useEffect, useState } from 'react';
import FindProductService from '../../domain/services/findProdutoService';
import { Product } from '../../domain/entities';
import Card from '../shared/Card/Card';
import SnackbarError from '../shared/Snackbar/SnackbarError';
import Loading from '../shared/Loading/Loading';
import { imagePopularTitle } from '../../assets/produtos';
import './Produtos.css';

type Props = {
    service: FindProductService;
}

const Produtos: React.FC<Props> = ({ service }) => {

    const [products, setProducts] = useState<Product[]>();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleProducts = async () => {
        try {
            setIsLoading(true);

            setProducts(await service.getProduct());
            setErrorMessage('');

            setIsLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message)
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        handleProducts();
    }, []);

    return (
        <div className="popular">
            {isLoading ?
                <Loading />
                :
                <>
                    <span className="title">
                        <img src={imagePopularTitle} alt="Imagem" />
                    </span>
                    <span className="card">
                        {products?.map((product) =>
                            <Card srcImage={product.Image} name={product.Name} price={product.Price} />
                        )}
                    </span>
                </>
            }
            {errorMessage && <SnackbarError message={errorMessage} />}
        </div>
    );
}

export default Produtos;