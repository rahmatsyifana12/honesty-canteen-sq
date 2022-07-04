import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function Product() {
    const [products, setProducts] = useState([]);

    function getProducts() {
        fetch('http://localhost:5000/api/v1/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container">
            <div className="row mt-lg-5 pt-5 d-flex justify-content-center text-black">
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="col-lg-4 col-md-6 col-12 p-0">
                                <ProductItem product={product} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Product;