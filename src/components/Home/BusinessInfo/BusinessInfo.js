import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 24/7 days',
        icon: faClock,
        background: 'primary',
    },
    {
        title: 'Visit our location',
        description: 'Dhaka - 1000, Bangladesh',
        icon: faMapMarker,
        background: 'dark',
    },
    {
        title: 'Contact us now',
        description: '+002 68334-665675',
        icon: faPhone,
        background: 'primary',
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="infoWidth row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;