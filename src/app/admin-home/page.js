import React from 'react';
import Link from 'next/link';

const AdminHeader = (props) => {
  const { adminName } = props;
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" href="/admin-home">
        <strong>Admin Home Page</strong>
      </Link>
      <div className="ms-auto">
        <div className="dropdown">
          <button 
            className="btn btn-outline-light dropdown-toggle" 
            type="button" 
            id="adminDropdown" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            {adminName ? `Welcome, ${adminName}` : 'Admin'}
          </button>
          <ul className="dropdown-menu" aria-labelledby="adminDropdown">
            <li>
              <Link className="dropdown-item" href="/admin/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/admin/settings">
                Settings
              </Link>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <Link className="dropdown-item text-danger" href="/auth/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container mt-4">
    <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Products</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
         <a href="#" className="btn btn-secondary me-2">Add Product</a>
        <a href="#" className="btn btn-secondary">View Active Products</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Categories</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
         <a href="/admin-add-category" className="btn btn-primary me-2" >Add Categories</a>
        <a href="/categories-list" className="btn btn-primary">View Active Categories</a>
      </div>
    </div>
  </div>
</div>
</div>
</>
  );
}

export default AdminHeader;