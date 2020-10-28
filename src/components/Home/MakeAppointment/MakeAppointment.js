import React from 'react';
import AppointmentImg from '../../../images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className="appointment-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={AppointmentImg} alt="" style={{width: '100%'}}/>
                    </div>
                    <div className="col-md-7 appointment-text">
                        <h5 style={{color: '#f1f1f1'}}>APPOINTMENT</h5>
                        <h2 className="mt-3 mb-3" style={{color: '#ffffff'}}>Make an appointment Today</h2>
                        <p style={{color: '#ffffff'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis temporibus amet consequuntur placeat ut nihil cumque? Nihil sed culpa dignissimos vel deserunt nemo quia perferendis, iure veniam distinctio. Dolor, saepe.</p>
                        <button className="btn-brand mt-3">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;