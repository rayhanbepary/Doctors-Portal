import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments,selectedDate}) => {

    const AppointmentsByDateStyle ={
        background: 'white',
        marginTop: '50px',
        borderRadius: '5px',
        padding: '30px 10px 10px 10px'
    }


    return (
        <div style={AppointmentsByDateStyle}>
            <div className="mb-3">
                <span className="text-brand" style={{paddingLeft: '10px',fontWeight: '600'}}>Appointments</span>
                <span className="text-brand" style={{marginLeft: '235px',fontWeight: '600'}}>{selectedDate}</span>
            </div>
            
            {
                appointments.length ? 
                <AppointmentShortList appointments={appointments}></AppointmentShortList> 
                : 
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;