import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function AddProductForm() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    const add = async () => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.post('http://localhost:5000/api/v1/products', {
                name,
                image: 'img_url',
                description,
                price
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            navigate('/products');
        } catch(error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    return (
        <form method="POST">
            <div className="row">
                <div className="form-group col-6 m-auto">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        id="product-name"
                        type="text"
                        className="form-control mb-4"
                        name="name"
                        placeholder="Name"
                        autoFocus
                    />
                    {/* <input
                        // onChange={(e) => setImage(e.target.value)}
                        onChange={(e) => setImage('img_url')}
                        id="image"
                        type="text"
                        className="form-control mb-4"
                        name="image"
                        placeholder="Image"
                        autoFocus
                    /> */}
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                        type="text"
                        className="form-control mb-4"
                        name="description"
                        placeholder="Description"
                        autoFocus
                    />
                    <input
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                        id="price"
                        type="text"
                        className="form-control mb-4"
                        name="price"
                        placeholder="Price"
                        autoFocus
                    />
                    <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ fontSize: "16px" }}
                    onClick={add}
                    >Add
                    </button>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block ms-2"
                        style={{ fontSize: "16px" }}
                        >Back
                        </button>
                    </Link>
                </div>
            </div>
        </form>
    );
}

export default AddProductForm;