import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div style={{width: '31%', boxShadow: '0 3px 6px #f1f1f1',marginRight: '25px',padding: '40px 20px'}}>
            <p style={{marginBottom: '30px'}}>{testimonial.review}</p>
            <div className="d-flex">
                <img src={testimonial.img} alt="" style={{width: '80px', height: '80px'}}/>
                <div style={{marginLeft: '20px', marginTop: '10px'}}>
                    <h6>{testimonial.name}</h6>
                    <p>{testimonial.location}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;