import Link from 'next/link'
import React from 'react'

const Testimonial_section = () => {
    return (
        <section className='testimonial_container'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <h2 className='text-black pt-3 heading'>Reasons Why Customers Love Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Praesentium necessitatibus voluptatem, quos aliquam quam adipisci molestias temporibus unde. 
                            Possimus facere quia, esse excepturi quas vero similique cum ab consectetur repudiandae? 
                            Doloribus, minima odio. Id inventore cum vitae quod, voluptatum similique accusamus fuga 
                            numquam a, velit maiores quis voluptatibus tempora obcaecati?</p>
                        <Link href="/">Documents Required</Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-12">
                         
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial_section
