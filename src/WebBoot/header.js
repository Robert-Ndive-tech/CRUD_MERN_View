import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

const NHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="logo" style={{
              backgroundColor: '#FFFFFF',
              color: 'black',
              padding: '5px 10px',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '20px',
            }}>
              {'{B}'}
            </span>
            <span className="ms-2">Home</span>
          </span>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
            <button className="btn btn-outline-light me-2" type="submit">Login</button>
            <button className="btn btn-warning" type="submit">Sign-up</button>
          </form>
        </div>

        
      </div>
    </nav>
  );
};

export default NHeader;


