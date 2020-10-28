import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking,date}) => {

    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div className="text-center" style={{width: '30%',boxShadow: '0 3px 6px #f1f1f1',padding: '30px',marginBottom: '50px', marginLeft: '10px',marginRight: '10px'}}>
            <h4 className="text-brand">{booking.subject}</h4>
            <h6>{booking.visitingHour}</h6>
            <small className="text-brand">{booking.totalSpace} SPACES AVAILABLE</small>
            <button className="btn-brand mt-3" onClick={openModal}>BOOK APPOINTMENT</button>
            <AppointmentForm date={date} appointmentOn={booking.subject} closeModal={closeModal} modalIsOpen={modalIsOpen}></AppointmentForm>
        </div>
    );
};

export default BookingCard;