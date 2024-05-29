import React from 'react'
import PlanCard from './plancard'
import PricingTable from './pricingtable/Pricingtable'

const Our_services = () => {
  return (
    <section className='services_container'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className='text-center'>Our Services at a Glance</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p>There are many variations of passages of Lorem Ipsum available.</p>
          </div>
        </div>
        <div className='row'>
          <div className="col-lg-12">
            <PricingTable />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Our_services
