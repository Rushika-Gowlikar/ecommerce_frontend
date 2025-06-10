'use client';
import React, { useState } from 'react';
const AddCategoryPage = () => {

  const [category, setCategory] = useState({
      "categoryName": '',
     
  });
   const handleChange = (e) => {
        const { name, value } = e.target;
          setCategory((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAddCategory = (e) => {
        e.preventDefault(); 
        if (category.categoryName.trim()) {
            const newCategory = {
                ...category
            }
           
            console.log(newCategory);
            fetch('http://localhost:4200/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCategory)
            }).then((response) => response.json())
                .then((json) => console.log(json));
                window.location.href = '/categories-list';
        }
    }

    return (<div className="container">
        <form className="mt-5" onSubmit={handleAddCategory}>
            <h2>Add Category</h2>
            <div className="mb-3">
                <input type="text" className="form-control" name="categoryName" placeholder="Category Name" value={category.categoryName} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary me-2" >Add Category</button>
            {/* <a href="/categories-list" className="btn btn-primary" >View Categories</a> */}
        </form>
    </div>);
}

export default AddCategoryPage;
