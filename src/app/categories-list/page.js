'use client';
import React, { useState, useEffect } from 'react';

const CategoriesListPage = () => {
  const [categories, setCategories] = useState([
]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notfound, setNotFound] = useState(false);
  
  // Fetch categories from API
  useEffect(() => {
    fetchCategories();

  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:4200/categories');
      setNotFound(false);
      if (!response.ok && response.status == 400) {

        setNotFound(true);
      }
      
      const data = await response.json();
      //categories are feched from the api
      setCategories(data);
    } catch (err) {
         setNotFound(true);
      
    } finally {
      setLoading(false);
    }
  };

  // Handle delete category
  const handleDelete = async (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const response = await fetch(`http://localhost:4200/category/${categoryId}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete category');
        }
        
        // Remove deleted category from state
        setCategories(categories.filter(category => category._id !== categoryId));

        alert('Category deleted successfully!');
      } catch (err) {
        alert('Error deleting category: ' + err.message);
      }
    }
  };

  // Handle update category (redirect to update page)
  const handleUpdate = (categoryId) => {
    // You can use Next.js router or window.location for navigation
    window.location.href = `/admin-update-category/${categoryId}`;
    // OR if using Next.js router:
    // router.push(`/admin/update-category/${categoryId}`);
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading categories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
          <button className="btn btn-outline-danger" onClick={fetchCategories}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Categories List</h2>
            {categories.length !== 0 && !notfound && <a href="/admin-add-category" className="btn btn-success">
              Add New Category
            </a>}
          </div>

          {categories.length === 0 ||notfound
          ? (
            <div className="alert alert-info" role="alert">
              <h4 className="alert-heading">No Categories Found</h4>
              <p>There are no categories available. Add your first category to get started.</p>
              <a href="/admin-add-category" className="btn btn-success">
                Add Category
              </a>

            </div>
          ) : (
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category, index) => (
                        <tr key={category.id || index}>
                          <th scope="row">{index + 1}</th>
                          <td>{category.categoryName || category.name}</td>
                          <td>
                            <button
                              className="btn btn-primary btn-sm me-2"
                              onClick={() => handleUpdate(category._id)}
                            >
                              Update
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(category._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesListPage;