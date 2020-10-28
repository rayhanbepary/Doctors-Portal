import React, { useEffect } from 'react';
import { useState } from 'react';
import doctorImg from '../../../images/appointment1.png';
import DoctorsCard from '../DoctorsCard/DoctorsCard';
 
const Doctors = () => {

    const [doctorsData,setDoctorsData] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then( res => res.json())
        .then( doctor => {
            setDoctorsData(doctor);
        })
    },[])

    console.log(doctorsData);

    return (
        <div className="container">
            <div style={{marginTop: '100px', marginBottom: '50px'}}>
                <h5 style={{fontWeight: 'bold',textAlign: 'center',color: '#1CC7C1'}}>OUR DOCTORS</h5>
            </div>
            <div className="row">
               {
                   doctorsData.map(doctor => <DoctorsCard doctor={doctor}></DoctorsCard>)
               }
            </div>
        </div>
    );
};

export default Doctors;