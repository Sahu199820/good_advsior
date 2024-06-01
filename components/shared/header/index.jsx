"use client";
import Login from '@/app/login/page';
import Login_panel from '@/components/login';
import React, { useState } from 'react';
import Megamenu from './megamenu';

const HeaderFile = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [islogin ,setloginopen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleLoginClick = () => {
        setloginopen(true); 
        let ans = document.getElementsByClassName('login-container')[0];
        console.log(ans);
        ans.style.display="block";
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
                    <a className="nav-link" href="#">
                        Consult an expert
                        </a>
                    </li>
                    <li className="nav-item">
                    <Megamenu />
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
                    <li className="nav-item login-btn pl-2 pr-2" onClick={handleLoginClick}>
                        Login
                    </li>
                  </ul>
                </div>
                }
              </div>
            </nav>
          </div>
        </div>
      </div>
      {
        islogin && <Login_panel />
      }
    </header>
  );
};

export default HeaderFile;
