"use client";
import React, { useState } from 'react';

const HeaderFile = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <header className='good-advsior-header-section'>
      <div className="container-fluid">
        <div className="row">
          <p className='warning-msg'>Professional tax is mandatory in your state! Avoid penalties.   </p>
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg ">
              <div className="container">
                <img
                  src="../../images/logo.png"
                  width={250}
                  height={50}
                  alt="good advisor logo"
                />
                <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                {
                  !isMenuOpen ?'':<div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ">
                    <li className="nav-item ">
                      <a className="nav-link active" aria-current="page" href="#">Consult Expert</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Business Setup</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Tax & Compliance</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Trademark & IP</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Documentation</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Others</a>
                    </li>
                    <li className="nav-item login-btn pl-2 pr-2">
                      <a className="nav-link text-white">Login</a>
                    </li>
                  </ul>
                </div>
                }
                
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderFile;
