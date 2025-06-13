'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const ProductUpdate = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState({
    name: '',
    price: '',
    url: '',
    description: '',
  });

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Product", data);
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err.message);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || '' : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product.name.trim()) {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      router.push('/admin-products-list'); // change path if needed
    }
  };

  return (
    <div className="container mt-4">
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="url" placeholder="Product URL" value={product.url} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="description" placeholder="Description" value={product.description} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="number" className="form-control" name="price" placeholder="Price" value={product.price} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Update Product</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
