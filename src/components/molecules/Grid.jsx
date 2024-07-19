// Grid.js - Componente molecular
import React from 'react';
import './Grid.css';
import Image from '../atoms/Image'; // Importar componente atómico

function Grid({ images }) {
    return (
        <div className="grid-container">
            {images.map((image, index) => (
                <Image key={index} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
}

export default Grid;


