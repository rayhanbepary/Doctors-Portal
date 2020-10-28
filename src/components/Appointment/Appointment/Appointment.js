import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../../Shared/Footer/Footer';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <div>
            <Header handleChange={handleChange}></Header>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;