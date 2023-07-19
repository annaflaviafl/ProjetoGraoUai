import React from 'react';
import './Home.css';
import Produtos from '../produtos/Produtos';
import Contatos from '../contatos/Contatos';
import FindProductService from '../../domain/services/findProdutoService';
import { imageButtonContent, imageLogo, imageMainContent } from '../../assets';

type Props = {
    service: FindProductService;
}

const Home: React.FC<Props> = ({ service }) => {
    return (
        <div>
            <section id="home">
                <div className="home">
                    <nav className="navbar">
                        <img src={imageLogo} alt="Imagem" />
                        <p>Grão Uai</p>
                        <a href="#home">Home</a>
                        <a href="#produtos">Produtos</a>
                        <a href="#contatos">Contatos</a>
                    </nav>
                    <div className="content">
                        <div className="textImage">
                            <p className="mainText">Seu café diário produzido por mãos familiares</p>
                            <p className="description">Podemos mudar nossa comunidade através de uma xícara de café.
                                Acreditamos em uma cadeia consciente por meio de relações de produção
                                e consumo que respeitam a vida, a qualidade e a agricultura familiar local.
                            </p>
                            <a href='#produtos' className="aImg">
                                <img src={imageButtonContent} alt="Imagem" />
                            </a>
                        </div>
                        <img src={imageMainContent} alt="Imagem" />
                    </div>
                </div>
            </section>
            <section id="produtos">
                <Produtos service={service} />
            </section>
            <section id="contatos">
                <Contatos />
            </section>
        </div>
    );
}

export default Home;