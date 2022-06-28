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
        {data.map((item ,posss) => {
              <label className="skills-section-title" key={posss}>{item.type}</label>
              return <TestimonialCard key={posss}  item={item} />;
        })}
      </div>
    
    </div>
  )
}

export default Testimonial;