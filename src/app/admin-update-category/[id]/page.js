'use client';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const AdminUpdateCategoryPage = () => {

    const { id } = useParams();
      const [category, setCategory] = useState({
        "categoryName": "",
        
      });
     useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:4200/category/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("API Response", data);
                setCategory(data)
            })
            .catch((err) => {
                console.log(err.message);
            })

    }, [id])
    const handleChange = (e) => {
        const { name, value } = e.target;
          setCategory((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleUpdateCategory = (e) => {
        e.preventDefault(); 
        if (category.categoryName.trim()) {
            const updatedCategory = {
                ...category
            }

            console.log(updatedCategory);
            fetch(`http://localhost:4200/category/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedCategory)
            }).then((response) => response.json())
                .then((json) => console.log(json));
            window.location.href = '/categories-list';      
        }
    }

    return (<div className="container">
        <form className="mt-5" onSubmit={handleUpdateCategory}>
            <h2>Update Category</h2>
            <div className="mb-3">
                <input type="text" className="form-control" name="categoryName" placeholder="Category Name" value={category.categoryName} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary me-2" >Update Category</button>
            {/* <a href="/categories-list" className="btn btn-primary" >View Categories</a> */}
        </form>
    </div>);
    
}

export default AdminUpdateCategoryPage;