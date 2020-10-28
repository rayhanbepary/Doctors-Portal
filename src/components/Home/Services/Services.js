import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Teeth from '../../../images/tooth.png';
import ServiceCard from '../ServiceCard/ServiceCard';



const servicesData = [
    {
        img: Fluoride,
        title: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        img: Cavity,
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        img: Teeth,
        title: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit'
    }
];

const Services = () => {
    return (
        <section style={{marginTop: '150px'}}>
            <h5 className="text-center" style={{color: '#1CC7C1', fontWeight: 'bold'}}>OUR SERVICES</h5>
            <h2 className="text-center" style={{color: '#3A4256', fontWeight: 'bold'}}>Services We Provide</h2>

            <div className="d-flex justify-content-center" style={{marginTop: '70px'}}>
                <div className="infoWidth row">
                    {
                        servicesData.map((service => <ServiceCard service={service}></ServiceCard>))
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;