'use client';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';

export default function ProductList() {
  const { setCartCount } = useCart();
  const [products, setProducts] = useState([]); // Use state for products

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const getProducts = () => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data); // Set state here to update component
        console.log('Products fetched:', data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shop Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product._id || product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.url} className="card-img-top" height={350} alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹{product.price}</p>
                <button className="btn btn-primary me-2" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <Link href={`/product-details/${product._id || product.id}`} className="btn btn-outline-secondary">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
