'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddProduct = ({ onAdd }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    url: '',
    description: '',
  });

  const router = useRouter();

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
      const newProduct = {
        ...product,
        productId: Number(new Date()),
      };

      try {
        const response = await fetch('http://localhost:5000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        });
        const data = await response.json();
        console.log(data);
        router.push('/admin-products-list'); // Redirect to products list after adding
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h1>Add Product</h1>
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
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
