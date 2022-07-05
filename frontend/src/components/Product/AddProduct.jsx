import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddProductForm from "./AddProductForm";

function AddProduct() {
    const navigate = useNavigate();

    const isLoggedin = () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/login');
            return;
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