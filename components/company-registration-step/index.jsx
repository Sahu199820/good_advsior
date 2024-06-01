"use client"

import React, { createContext, useState } from 'react';
import Formone from './form-one';
import Formtwo from './form-two';
import Formthree from './form-three';
import Formstep from './form-step';
import Certificate from './certificate-desc';
import Link from 'next/link';

export const ThemeContext = createContext(33);

const Company_registration_step = () => {
 

  const [step, setStep] = useState(0);
  const [width, setWidth] = useState(33);

  const get_nextform = () => {
    setStep(prevStep => prevStep + 1);
    setWidth(prevWidth => prevWidth + 33);

    if (step === 4 || width === 99) {
    
      let get_data = document.getElementsByClassName("registration-step-box")[0];
      let get_certificate = document.getElementsByClassName("certificate")[0];
      console.log(get_certificate);
      get_data.style.display = "none";
      get_certificate.style.display = "none";
      console.log(get_data);
    }
  };

  const get_backform = () => {
    setStep(prevStep => prevStep - 1);
    setWidth(prevWidth => prevWidth - 33);

    if (step === -1 || width === 0) {
       let get_data = document.getElementsByClassName("registration-step-box")[0];
       let get_certificate = document.getElementsByClassName("certificate")[0];
       console.log(get_certificate);
       console.log(get_data);
    }
  };

  return (
    <ThemeContext.Provider value={width}>
      <div className="good-advisor-registration-container">
        <div className='container-fluid'>
          <div className="row">
            <div className="col-lg-4">
              <img src='../../images/logo.png' /><br/>
              <h5 style={{display:"none"}} className='heading_data'><Link href="/">Home</Link></h5>
              <div className="registration-step-box m-2 rounded">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <Formstep />
                      {step === 0 && <Formone />}
                      {step === 1 && <Formtwo />}
                      {step === 2 && <Formthree />}
                      <button onClick={get_nextform} className='login-btn' style={{border:"none", color:"#ffffff"}}>Next</button>&nbsp;
                      {
                        step > 0 &&  <button onClick={get_backform} className='login-btn' style={{border:"none", color:"#ffffff"}}>Back</button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 certificate" >
              <Certificate />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Company_registration_step;
