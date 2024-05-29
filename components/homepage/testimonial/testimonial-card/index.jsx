"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';

SwiperCore.use([Pagination, Navigation]);

const testimonials = [
  { id: 1, text: 'Testimonial 1', author: 'Author 1' },
  { id: 2, text: 'Testimonial 2', author: 'Author 2' },
  { id: 3, text: 'Testimonial 3', author: 'Author 3' },
  { id: 4, text: 'Testimonial 4', author: 'Author 4' },
];

const TestimonialCards = () => {
  return (
    <div className="testimonial-slider-container">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial">
              <p>{testimonial.text}</p>
              <h4>{testimonial.author}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default TestimonialCards;
