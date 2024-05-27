import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderFile = () => {
  return (
    <header className='good-advsior-header-section'>
        <div className="container-fluid">
           <div className="row">
           <p className='warning-msg'>Professional tax is mandatory in your state! Avoid penalties.   </p>
             
             <div className="col-lg-12">
             <nav class="navbar navbar-expand-lg ">
              <div class="container">
                  <img
                    src="../../images/logo.png"
                    width={250}
                    height={50}
                    alt="good logo"
                  />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center" id="navbarNav">
                  <ul class="navbar-nav ">
                    <li class="nav-item ">
                      <a class="nav-link active" aria-current="page" href="#">Consult Exprrt</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Business Setup</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Tax & Compliance </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ">Trademark & IP</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ">Documentation</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ">Others</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
              </nav>
             </div>
           </div>
        </div>
    </header>
  )
}
export default HeaderFile;
