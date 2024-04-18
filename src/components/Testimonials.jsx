import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import  images
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';

const testimonials = [
  {
    id: 1,
    image: user1,
    heading: 'Customer 1',
    paragraph: 'Lorem ipsum dolor sit amet, '
  },
  {
    id: 2,
    image: user2,
    heading: 'Customer 2',
    paragraph: 'Lorem ipsum dolor sit amet,'
  },
  {
    id: 3,
    image: user2,
    heading: 'Customer 3',
    paragraph: 'Lorem ipsum dolor sit amet,'
  },
];

export default function CarTestimonialsouselSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <div className='p-5 h-screen '>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='texts text-white text-center'>
              <h1 style={{ fontSize: '65px' }}>
                Satisfied Customers <br />
                Speak for Us
              </h1>
              <p>
                Experience excellence through our unwavering commitment to <br />
                customer satisfaction in delivering unparalleled automotive services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col">
            <div className="slider-container text-white">
              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="carousel-item ">
                    <img
                      src={testimonial.image}
                      alt={`User ${testimonial.id}`}
                      className="img-fluid"
                    />
                    <div className=" mt-3">
                      <h3>{testimonial.heading}</h3>
                      <p>{testimonial.paragraph}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}