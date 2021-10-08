import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch('./service.json')
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  return (
    <div>
      <section className='container mb-3'>
        <h2 className='text-center mt-5 mb-3'> Our top Services & Courses</h2>
        <p className='text-center my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          molestiae ex doloremque natus rem adipisci temporibus molestias vel
          nulla nobis{' '}
        </p>
        <Row  xs={1} md={2} lg={3} className='g-4'>
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Services;