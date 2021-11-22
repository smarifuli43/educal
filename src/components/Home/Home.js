import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Categories from '../Categories/Categories';
import Services from '../Services/Services';

import './Home.css';

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('./category.json')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className='hero text-white'>
        <div className='container'>
          <div className='row '>
            <div className='col-12 col-md-8 col-lg-6'>
              <div className='mt-5 pt-5'>
                <h1 className='mt-5 mb-3'>
                  Discover One of the Best learning platform
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  error repellendus rerum atque, ipsam minima sunt iure hic
                  inventore quidem saepe neque assumenda similique vitae
                  explicabo alias corrupti earum obcaecati?
                </p>
                <button
                  className='btn btn-primary mt-3'
                  style={{
                    backgroundColor: '#5C2EDE',
                    borderColor: '#5C2EDE',
                  }}
                >
                  Apply Now 
                </button>
                <button className='btn btn-outline-light ms-3 mt-3'>
                  Our Courses
                </button>
              </div>
            </div>
            <div className='col-12 col-md-4 col-lg-6'></div>
          </div>
        </div>
      </div>

      
      {/* Categories */}
      <section className="container">
        <h2 className='text-center mt-5 mb-3'> Top Categories</h2>
        <p className='text-center my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          molestiae ex doloremque .
        </p>
      <Row  xs={1} md={2} lg={4} className='g-4'>
        {categories.map((category) => (
          <Categories key={category.id} category={category}></Categories>
        ))}
        </Row>
      </section>

      {/* services or courses */}
      {<Services></Services>}
    </div>
  );
};

export default Home;
