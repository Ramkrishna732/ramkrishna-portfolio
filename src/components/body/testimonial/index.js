import React from 'react'
import { TestimonialData } from '../../../data/testimonial';
import Separator from '../../common/separator'
import TestimonialCard from './testimonial-card';
import "./testimonial.css";


function Testimonial() {
  const data=TestimonialData;
  return (
    <div className='testimonial'>
        <Separator/>
        <label className="section-title">Testimonial</label>
      <div className="testimonial-list">
        {data.map((item) => {
          return <TestimonialCard item={item} />;
        })}
      </div>
    
    </div>
  )
}

export default Testimonial;