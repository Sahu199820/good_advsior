import React, { useContext, useState } from 'react'
import { ThemeContext } from '..';


const Formstep = (props) => {

    const finalwidth = useContext(ThemeContext);


    return (
        <div className='step-container' >
            <div className='container'>
                <div className="row">
                    <div className="col-lg-4">
                        <h5 >Step 1</h5>
                    </div>
                    <div className="col-lg-4">
                        <h5>Step 2</h5>
                    </div>
                    <div className="col-lg-4">
                        <h5>Step 3</h5>
                    </div>
                    <div className="col-lg-12">
                        <h2 className='border-2' >
                        </h2>
                        <h4 className='' style={{width:`${finalwidth}%`}}>

                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formstep;