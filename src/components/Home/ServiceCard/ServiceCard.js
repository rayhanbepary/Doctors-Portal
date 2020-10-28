import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <div>
                <img src={service.img} alt="" style={{width: '50px'}}/>
                <h6 style={{marginTop: '30px', marginBottom: '20px'}}>{service.title}</h6>
                <p className="text-secondary">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;