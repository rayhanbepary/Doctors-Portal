import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Header = ({handleChange}) => {
    return (
        <div className="appointment-header">
            <Navbar></Navbar>
            <AppointmentHeader handleChange={handleChange}></AppointmentHeader>
        </div>
    );
};

export default Header;