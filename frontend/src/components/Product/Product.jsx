import { useState } from "react";
import ProductItem from "./ProductItem";

function Product() {
    const [products, setProducts] = useState([]);

    const product = {
        name: 'permen',
        price: 5000,
        description: 'Enak banget ini mah'
    };

    return (
        <div className="container">
            <div className="">
                <div>
                    <ProductItem product={product} />
                </div>
            </div>
        </div>
    );
}

export default Product;