import React from 'react';

const DoctorsCard = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
            <img src={`data:image/jpeg;base64,${doctor.image.img}`} alt="" style={{width: '100%',marginBottom: '20px'}}/>
            <h5 style={{marginBottom: '3px',fontWeight: 'bold'}}>{doctor.name}</h5>
            <small>{doctor.phone}</small>
        </div>
    );
};

export default DoctorsCard;