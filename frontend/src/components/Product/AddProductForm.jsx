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
        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/register', {
                name,
                image,
                description,
                price
            });
            navigate('/');
        } catch(error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    return (
        <form method="POST">
            <div className="row">
                <div className="form-group col-6">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        id="product-name"
                        type="text"
                        className="form-control mb-4"
                        name="name"
                        placeholder="Price"
                        autoFocus
                    />
                    <input
                        onChange={(e) => setImage(e.target.value)}
                        id="password"
                        type="password"
                        className="form-control mb-4"
                        name="password"
                        placeholder="Password"
                        autoFocus
                    />
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
                        id="product-name"
                        type="text"
                        className="form-control mb-4"
                        name="name"
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
                    <Link to="/" style={{ textDecoration: "none" }}>
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