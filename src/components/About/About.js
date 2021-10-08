import React from 'react';
import './About.css'
import img from '../../img/about.jpg'

const About = () => {
  return (
    <div>
      <div className='about-banner position-relative'>
        <h1 className='text-center text-white position-absolute top-50 start-50 translate-middle'>
          About us
        </h1>
      </div>

      <div className='container'>
        <div className='row mt-5 align-items-center'>
          <div className='col-12 col-md-6'>
            <img src={img} alt='' className='img-fluid' />
          </div>
          <div className='col-12 col-md-6  mt-4 mt-md-0'>
            <h2>Our Goal</h2>
            <p className='shadow p-3 rounded fs-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              sequi similique deserunt corrupti debitis adipisci distinctio
              natus perspiciatis ab iusto cupiditate unde quidem voluptatibus
              laudantium itaque illo suscipit eveniet dolorem quia blanditiis.
              Quas sequi similique deserunt corrupti debitis adipisci distinctio
              natus perspiciatis ab iusto cupiditate unde quidem voluptatibus
              laudantium itaque illo suscipit eveniet dolorem quia blanditiis
              eveniet dolorem quia blanditiis. Quas sequi similique deserunt
              corrupti debitis adipisci distinctio natus perspiciatis ab iusto
              cupiditate unde quidem voluptatibus laudantium itaque illo
              suscipit eveniet dolorem quia blanditiis eveniet dolorem quia
              blanditiis. Quas sequi similique deserunt corrupti debitis
              adipisci 
            </p>
          </div>
        </div>
        <div className='mt-5'>
          <h1>Our History</h1>
          <p className='shadow p-3 rounded fs-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi
            similique deserunt corrupti debitis adipisci distinctio natus
            perspiciatis ab iusto cupiditate unde quidem voluptatibus laudantium
            itaque illo suscipit eveniet dolorem quia blanditiis at repellendus,
            autem voluptatum sint. Minima placeat quo cupiditate voluptatem enim
            voluptate assumenda, libero doloremque earum deserunt? Enim nostrum
            repudiandae illo quasi placeat? Maxime saepe, dolores nisi corporis,
            eligendi nostrum amet consectetur quam ad doloribus nesciunt quas
            quisquam quod alias facilis magni blanditiis optio quia. Doloribus
            dolorum facere, modi corporis rem vitae provident architecto ipsa
            accusantium qui dolore? Dignissimos rem officiis exercitationem enim
            voluptatem. Fuga eligendi, blanditiis expedita ratione temporibus
            omnis suscipit explicabo nulla assumenda beatae est exercitationem
            sunt odio iure repellat sed, distinctio molestias doloremque!
            Mollitia accusamus laboriosam eveniet! Quisquam culpa natus magni
            atque doloribus, facilis, voluptas ipsa provident fugit
            necessitatibus consectetur mollitia repellat corporis? Temporibus
            numquam dolore, perspiciatis vitae voluptas nulla cupiditate officia
            enim ducimus id, alias, magni repellat laboriosam possimus impedit.
            In minus voluptatem dicta soluta libero dolore distinctio voluptate
            asperiores. Pariatur, consectetur deserunt voluptatibus, aliquam cum
            asperiores nihil magni dignissimos veniam nisi illum odit numquam
            labore! Quia tempora inventore dolores accusantium tenetur saepe
            repellendus exercitationem harum rem. Excepturi vel sint quidem
            exercitationem, consequuntur non?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;