import React from 'react';
import quote from '../../../images/quote.png';
import testimonial1 from '../../../images/testi-1.png';
import testimonial2 from '../../../images/testi-2.png';
import testimonial3 from '../../../images/testi-3.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';


const testimonialsData = [
    {
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis temporibus amet consequuntur placeat ut nihil cumque? Nihil sed culpa dignissimos vel deserunt nemo quia perferendis, iure veniam distinctio. Dolor, saepe.',
        img: testimonial1,
        name: 'Winson Herry',
        location: 'London'
    },
    {
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis temporibus amet consequuntur placeat ut nihil cumque? Nihil sed culpa dignissimos vel deserunt nemo quia perferendis, iure veniam distinctio. Dolor, saepe.',
        img: testimonial2,
        name: 'Winson Herry',
        location: 'London'
    },
    {
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis temporibus amet consequuntur placeat ut nihil cumque? Nihil sed culpa dignissimos vel deserunt nemo quia perferendis, iure veniam distinctio. Dolor, saepe.',
        img: testimonial3,
        name: 'Winson Herry',
        location: 'London'
    }
]


const Testimonial = () => {
    return (
        <section style={{marginTop: '100px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 style={{color: '#1CC7C1',fontWeight: 'bold',marginBottom: '20px'}}>TESTIMONIAL</h5>
                        <h2 style={{fontSize: '40px', fontWeight: 'bold'}}>What's Our Patients <br/> Says</h2>
                    </div>
                    <div className="col-md-6">
                        <img src={quote} alt="" style={{width: '200px', marginLeft: '330px'}} />
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5 ml-3">
                    <div className="row">
                        {
                            testimonialsData.map( testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                        }
                    </div>
                </div>
            </div>
            
            
        </section>
    );
};

export default Testimonial;