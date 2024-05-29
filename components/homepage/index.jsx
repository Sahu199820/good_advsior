import React from 'react'
import Hero_section from './hero-section';
import Our_supporter from './our-supporter';
import Whychooseus from './why-chooseus';
import Our_services from './our-services';
import Testimonial_container from './testimonial';

const Homepage = () => {
  return (
    <div>
      <Hero_section />
      <Our_supporter />
      <Whychooseus />
      <Our_services />
      <Testimonial_container />
    </div>
  )
}
export default Homepage;
