import React, { useEffect, useState, useContext } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { userContext } from '../../../App';

const Dashboard = () => {

    const containerStyle = {
        background: '#F4FDFB',
        height: '100%',
        padding: '0',
        margin: '0',
        paddingBottom: '50px'
    }

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [selectedDate, setSelectedDate] = useState((new Date()).toDateString());
    const [appointments, setAppointments] = useState([]);

    const handleChange = (date) => {
        setSelectedDate( date.toDateString());
    }


    useEffect( () => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })
        .then( res => res.json())
        .then( data => {
            setAppointments(data);
        })
    },[selectedDate])

    return (
        <div className="dashboard-container">
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2" style={{paddingLeft: '0'}}>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4">
                    <Calendar
                        onChange={handleChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate selectedDate={selectedDate} appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;