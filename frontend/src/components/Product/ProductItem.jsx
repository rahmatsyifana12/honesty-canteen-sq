import styled from "styled-components";
import { PropTypes } from 'prop-types';

const Card = styled.div`
    height: 500px;
    background: rgba(255, 255, 255, .25);
    border-radius: 8;
    overflow: auto;
`;

function ProductItem({ product }) {
    return (
        <Card className='card m-2 p-2'>
            <div className="card-body text-center">
                <h6 className="">{product.name}</h6>
                <h5 className="mb-3">{product.price}</h5>
                <p className="mb-3">{product.description}</p>
            </div>
        </Card>
    );
}

ProductItem.propTypes = {
    product: PropTypes.object
};

export default ProductItem;