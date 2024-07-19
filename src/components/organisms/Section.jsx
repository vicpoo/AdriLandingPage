// Section.js - Organismo
import React from 'react';
import Grid from '../molecules/Grid'; // Importar componente molecular

const images = [
    { src: 'Fondo.png', alt: 'Image 1' }
];

function Section() {
    return (
        <div className="section-container">
            <Grid images={images} /> {/* Utilizando el componente molecular Grid */}
        </div>
    );
}

export default Section;
