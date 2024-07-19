import React from 'react';
import Text from "../atoms/Text";
import mysql from "../../data/Title";

function Title() {
    return (
        <div>
            {mysql.products.map(product => (
                <Text key={product.id} text={product.text} />
            ))}
        </div>
    );
}

export default Title;
