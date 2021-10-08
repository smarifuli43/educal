import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
  const { name, img, author, price, enrolled } = props.service;
  return (
    <div>
      <Card
        className='p-3 h-100 shadow'
        style={{
          background: 'linear-gradient(150deg, #f8f7fc 35%, #f2effa 100% )',
        }}
      >
        <Card.Img variant='top' src={img} />
        <Card.Body className='px-0'>
          <Card.Title>{name}</Card.Title>
          <div className=' d-flex justify-content-between align-items-center'>
            <Card.Text className='m-0'>
              <h4 style={{ color: '#5C2EDE' }}>Price: ${price}</h4>
            </Card.Text>
            <Card.Text className='m-0'>
              <small style={{ color: '#5C2EDE' }}>By {author}</small>
            </Card.Text>
          </div>
          <hr />
          <div className='  d-flex justify-content-between align-items-center'>
            <Card.Text className='pt-2'>Enrolled Student: {enrolled}</Card.Text>
            <button
              className='btn btn-primary'
              style={{
                backgroundColor: '#5C2EDE',
                borderColor: '#5C2EDE',
              }}
            >
              Get Enrolled
            </button>
          </div>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
