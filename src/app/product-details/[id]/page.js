'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartCountContext } from './../../context/CartContext';


const ProductDetailsPage = () => {
    const { dispatch } = useContext(CartCountContext);

    const { id } = useParams(); // product ID from URL
    const [product, setProduct] = useState(null);



    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:5000/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Product:", data);
                setProduct(data);
            })
            .catch((err) => console.log(err.message));
    }, [id]);

    const handleAddToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const handleBuyNow = () => {
        alert('Proceed to Buy');
        // Redirect to checkout or payment page
    };

    if (!product) {
        return <div className="container mt-5">Loading product...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Product Image */}
                <div className="col-md-6">
                    <img
                        src={product.url || 'https://via.placeholder.com/400'}
                        alt={product.name}
                        className="img-fluid"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                </div>

                {/* Product Info */}
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <h4 className="text-success">₹{product.price}</h4>
                    <p>{product.description}</p>

                    <div className="mt-4">
                        <button className="btn btn-warning me-3" onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </button>
                        <button className="btn btn-success" onClick={handleBuyNow}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;