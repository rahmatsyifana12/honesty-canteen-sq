import styled from "styled-components";
import { PropTypes } from 'prop-types';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
    height: 500px;
    background: rgba(255, 255, 255, .25);
    border-radius: 8;
    overflow: auto;
`;

function ProductItem({ product }) {
    const navigate = useNavigate();

    const addBuyerInbox = async (accessToken) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/v1/inboxes/buyer/${product.id}`, {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }); 
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    const addSellerInbox = async (accessToken) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/v1/inboxes/seller/${product.id}`, {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }); 
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    const buy = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/login');
            return;
        }
        try {
            addBuyerInbox(accessToken);
            addSellerInbox(accessToken);
            const response = await axios.delete(`http://localhost:5000/api/v1/products/buy/${product.id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            
            navigate('/products');
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    return (
        <Card className='card m-2 p-2'>
            <div className="card-body text-center">
                <h6 className="">{product.name}</h6>
                <h5 className="mb-3">{product.price}</h5>
                <p className="mb-3">{product.description}</p>

                <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ fontSize: "16px" }}
                    onClick={buy}
                    >Buy
                    </button>
            </div>
        </Card>
    );
}

ProductItem.propTypes = {
    product: PropTypes.object
};

export default ProductItem;