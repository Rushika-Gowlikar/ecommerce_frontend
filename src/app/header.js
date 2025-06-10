import React from 'react';
import Link from 'next/link';

const Header = (props) => {
  const { count } = props;
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" href="/">Online Store</Link>
      <div className="ms-auto">
        {/* Login Dropdown */}
        <div className="dropdown me-2 d-inline-block">
          <button 
            className="btn btn-outline-light dropdown-toggle" 
            type="button" 
            id="loginDropdown" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            Login
          </button>
          <ul className="dropdown-menu" aria-labelledby="loginDropdown">
            <li>
              <Link className="dropdown-item" href="/auth/login/user">
                User Login
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/admin-home">
                Admin Home page
              </Link>
            </li>
          </ul>
        </div>
        
        <Link className="btn btn-outline-light me-2" href="/auth/register">Register</Link>
        <Link className="btn btn-warning" href="/cart">Cart ({count})</Link>
      </div>
    </nav>
  );
}

export default Header;
