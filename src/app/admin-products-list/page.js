'use client';

import React, { use, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function AdminProductList() {
    // Dummy data
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // Fetch products from API or use dummy data
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    fetchProducts();
}, []);



    const handleUpdate = (id) => {
        router.push(`/admin-update-product/${id}`);
        // Add update logic or redirect to update page
    };

    const handleDelete = (id) => {
        const confirmDelete = confirm("Are you sure to delete?");
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        });
        if (confirmDelete) {
            setProducts(products.filter(product => product._id !== id));
        }
    };


    const handleAddProduct = () => {
        alert("Redirect to add product page");
        // Add logic to redirect to Add Product form
    };

    return (
        <div className="container mt-4">
            
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Admin Product List</h2>
                <a href="/admin-add-product" className="btn btn-success">
                    Add New Product
                </a>
            </div>
            <Table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>

                        <th>Description</th>
                        <th>Actions</th>

                    </tr>
                </thead>

                <tbody>
                    {products.map((product, index) => (
                        <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td>{product.name.slice(0,20)}..</td>
                            <td>{product.price}</td>
                            <td>
                                <img src={product.url} alt={product.name} width={50} height={50} />
                            </td>
                            <td>{product.description.slice(0, 28)}...</td>
                            <td>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleUpdate(product._id)}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(product._id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default AdminProductList;
