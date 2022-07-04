import AddProductForm from "./AddProductForm";

function AddProduct() {
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