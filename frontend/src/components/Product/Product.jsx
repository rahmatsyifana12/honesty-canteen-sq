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

    return (
        <div className="container">
            <Navbar />
            <div id="sort">
                <div>
                    <h6>Sort by product name</h6>
                    <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ fontSize: "16px" }}
                    // onClick={buy}
                    >Ascending
                    </button>
                    <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block ms-2"
                    style={{ fontSize: "16px" }}
                    // onClick={buy}
                    >Descending
                    </button>
                </div>
                <div className="mt-3">
                    <h6>Sort by date item created</h6>
                    <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ fontSize: "16px" }}
                    // onClick={buy}
                    >Ascending
                    </button>
                    <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block ms-2"
                    style={{ fontSize: "16px" }}
                    // onClick={buy}
                    >Descending
                    </button>
                </div>
            </div>
            <div className="row mt-lg-2 pt-5 d-flex justify-content-center text-black">
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