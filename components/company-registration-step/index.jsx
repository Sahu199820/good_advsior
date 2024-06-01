"use client"

import React, { createContext, useState }from 'react';
import Formone from './form-one';
import Formtwo from './form-two';
import Formthree from './form-three';
import Formstep from './form-step';
import Certificate from './certificate-desc';

export const ThemeContext = createContext(33);

const Company_registration_step = () => {

  const [step, setStep] = useState(0);
    const [width, setWidth] = useState(33);


  const get_nextform = () => {
        setStep(prevStep => prevStep + 1);
        setWidth(prevWidth => prevWidth + 33); // Update width as per your logic
        console.log(width);
    }

  return (
    <ThemeContext.Provider value={width}>

    <div className="good-advisor-registration-container">
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-4">
            <img src='../../images/logo.png' />
             <div className="registration-step-box m-2 rounded">
                  <div className="container">
                    <div className="row">
                       <div className="col-lg-12">
                           <Formstep />
                           {step === 0 && <Formone />}
                           {step === 1 && <Formtwo />}
                           {step == 2 && <Formthree />}
                           <button onClick={get_nextform} className='login-btn' style={{border:"none", color:"#ffffff"}}>Next </button>
                       </div>
                    </div>
                  </div>
             </div>
          </div>
          <div className="col-lg-8">
               <Certificate />
          </div>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>

  );
};

export default Company_registration_step;
