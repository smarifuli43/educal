import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Categories.css'

const Categories = (props) => {
  const { category, course } = props.category;
  return (
    <div>
      <Col className='shadow-sm '>
        <Card className='card-customise'>
          <Card.Body className='text-center text-white'>
            <Card.Title>{category}</Card.Title>
            <Card.Text>
              <p className="text-white-50">{course}</p>
            </Card.Text>
            <button
              className='btn-sm btn-primary'
              style={{
                backgroundColor: '#5C2EDE',
                borderColor: '#5C2EDE',
              }}
            >
              View Course
            </button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Categories;