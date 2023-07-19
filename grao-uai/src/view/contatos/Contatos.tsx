import React from 'react';
import './Contatos.css';
import { imageContacts } from '../../assets';

const Contatos: React.FC = () => {
    return (
        <div className="contatos">
            <img src={imageContacts} alt="Imagem" />
        </div>
    );
}

export default Contatos;