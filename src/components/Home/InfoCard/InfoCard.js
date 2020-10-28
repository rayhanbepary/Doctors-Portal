import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white" style={{paddingRight: '7px', paddingLeft: '7px'}}>
            <div className={`d-flex justify-content-center rounded-lg info-${info.background} info-container`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;