import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddProductForm from "./AddProductForm";
import jwtDecode from 'jwt-decode';
import axios from "axios";

function AddProduct() {
    const navigate = useNavigate();

    const isLoggedin = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/');
            return;
        }
        try {
            const response = await axios.get('http://localhost:5000/api/v1/tokens', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        } catch (error) {
            console.log(error.message);
            if (error.response) {
                if (error.response.status === 401) {
                    localStorage.setItem('accessToken', '');
                    navigate('/');
                }
            }
        }
    }

    useEffect(() => {
        isLoggedin();
    }, []);

    return (
        <div className='container'>
            <div>
                <h1 className='mb-3'>Add Product</h1>
                <AddProductForm />
            </div>
        </div>
    );
}

export default AddProduct;