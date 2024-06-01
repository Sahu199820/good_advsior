import React from 'react';

const FormTwo = () => {
  return (
    <div>
      <h4 className='heading pt-4'>Few Steps to Go</h4>
      <p className='pt-4'>Please provide some information, and we will get your work done.</p>
      <form action="" className='p-2'>
        <p>How many employees does your company have?</p>
        <div>
          <input type="radio" id="age1" name="age" value="30" />&nbsp;
          <label htmlFor="age1">0 - 30</label><br />
          <input type="radio" id="age2" name="age" value="60" />&nbsp;
          <label htmlFor="age2">31 - 60</label><br />
          <input type="radio" id="age3" name="age" value="100" />&nbsp;
          <label htmlFor="age3">61 - 100</label><br /><br />
        </div>
      </form>
    </div>
  );
}

export default FormTwo;
