import React from "react";
import "./Cart.css";
import movies from '../../data/Cart'; 

function Cart() {
    return (
        <div className="cart-container">
            <div className="cart-grid">
                {movies.slice(0, 5).map((movie, index) => (
                    <div className="cart-item" key={index}>
                        <img src={movie.image} alt={movie.title} className="cart-image" />
                        <div className="cart-details">
                            <h2 className="cart-title">{movie.title}</h2>
                            <p className="cart-director">Autor: {movie.director}</p>
                            <p className="cart-year">Year: {movie.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
