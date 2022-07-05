import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ProductItem from "./ProductItem";
import axios from "axios";
import Loading from "../Loading/Loading";

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/products');

            setProducts(response.data.data.products);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    const sort = (order, base) => {
        let sortedProducts = [];
        if (order === 'asc') {
            sortedProducts = [...products].sort((a, b) => {
                return (a[base].toLowerCase() > b[base].toLowerCase() ? 1 : -1)
            });
        }

        if (order === 'desc') {
            sortedProducts = [...products].sort((a, b) => {
                return (a[base].toLowerCase() < b[base].toLowerCase() ? 1 : -1)
            });
        }
        setProducts(sortedProducts);
    }

    return (
        <div className="container">
            <Navbar />
            <div id="sort" className="">
                <div className="">
                    <h6>Sort by product name</h6>
                    <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ fontSize: "16px" }}
                    onClick={() => sort('asc', 'name')}
                    >Ascending
                    </button>
                    <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block ms-2"
                    style={{ fontSize: "16px" }}
                    onClick={() => sort('desc', 'name')}
                    >Descending
                    </button>
                </div>
                <div className="mt-3">
                    <h6>Sort by date item created</h6>
                    <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ fontSize: "16px" }}
                    onClick={() => sort('asc', 'createdAt')}
                    >Ascending
                    </button>
                    <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block ms-2"
                    style={{ fontSize: "16px" }}
                    onClick={() => sort('desc', 'createdAt')}
                    >Descending
                    </button>
                </div>
            </div>
            <div className="row pt-3 d-flex text-black">
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