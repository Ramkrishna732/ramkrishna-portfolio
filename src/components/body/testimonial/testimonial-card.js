import React from 'react'
import "./testimonial-card.css"
function TestimonialCard({ item }) {
    return (
        <div className='testimonial-card'>

            <img src={item.avatarimage} className="testimonial-image" />
            <div className='testimonial-info'>
                <div className='testimonial-username'>

                    <label>{item.name}</label>
                </div>
                <div className='testimonial-desc'>
                    <p>{item.descriptions}</p>
                </div>

            </div>
        </div>




    )
}

export default TestimonialCard