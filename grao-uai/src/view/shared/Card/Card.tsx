import React from 'react';
import { imageBuy } from '../../../assets/produtos';
import './Card.css';

type Props = {
    srcImage: string,
    name: string,
    price: number,
}

const Card: React.FC<Props> = ({ srcImage, name, price }) => {
    return (
        <div className="cardBackground">
            <img src={srcImage} alt="Imagem" />
            <div className="name">{name}</div>
            <div className="price">R${price}</div>
            <img src={imageBuy} alt="Imagem" />
        </div>
    );
}

export default Card;