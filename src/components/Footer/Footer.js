import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <section className='footer-navigation py-5'>
        <div className='container'>
          <div className='row g-4'>
            <div className='col-12 col-md-6 col-lg-4'>
              <h5 className='text-uppercase text-white border-start border-3  ps-2 mb-4'>
                About Us
              </h5>
              <p className='text-white-50 mt-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor inci done idunt ut labore et dolore magna aliqua.
              </p>
              <div className='social-media d-flex '>
                <a href="/"> <i className='fab fa-facebook-f text-white-50 '></i></a>
               <a href="/"><i className='fab fa-instagram text-white-50 ms-4'></i></a>
               <a href="/"><i className='fab fa-twitter text-white-50 ms-4'></i></a>
               <a href="/"><i className='fab fa-github text-white-50 ms-4'></i></a>
                
                
                
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <h5 className='text-uppercase text-white border-start border-3 ps-2 mb-4'>
                WORKING HOURS
              </h5>
              <p className='text-white-50 mt-1 mb-4'>
                {' '}
                We work 7 days a week, every day excluding major holidays.
                Contact us if you have an emergency, with our Hotline and
                Contact form.
              </p>
              <div className='time'>
                <div className=' d-flex justify-content-between mt-1'>
                  <span className='text-white-50'>Sunday - Wednesday:</span>
                  <span className='text-white-50'>10:00 - 04:00</span>
                </div>
                <div className=' d-flex justify-content-between mt-1'>
                  <span className='text-white-50'>Thursday:</span>
                  <span className='text-white-50'>10:00 - 02:00</span>
                </div>
                <div className=' d-flex justify-content-between mt-1'>
                  <span className='text-white-50'>Friday:</span>
                  <span className='text-white-50'>10:00 - 12:00</span>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 ps-lg-5'>
              <h5 className='text-uppercase text-white border-start border-3  ps-2 mb-4'>
                SERVICES
              </h5>
              <div className='service-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-5 ms-1'>
                  Online Courses
                </a>
              </div>
              <div className='service-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-5 ms-1'>
                  1000 of courses
                </a>
              </div>
              <div className='service-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-5 ms-1'>
                  Experienced tutors
                </a>
              </div>
              <div className='service-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-5 ms-1'>
                  Quality teaching
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;