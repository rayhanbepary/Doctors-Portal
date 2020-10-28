import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";
import { userContext } from '../../../App';



const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isDoctor,setIsDoctor] = useState(false);
    
	console.log(isDoctor);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setIsDoctor(data);
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-5" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-white" style={{textDecoration: "none"}}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white" style={{textDecoration: "none"}}>
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </Link>
                </li>
                {
                     
                     isDoctor && <div>
                         <li>
                            <Link to="/doctor/patients" className="text-white" style={{textDecoration: "none"}}>
                                <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/prescriptions" className="text-white" style={{textDecoration: "none"}}>
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/adddoctors" className="text-white" style={{textDecoration: "none"}}>
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/setting" className="text-white" style={{textDecoration: "none"}}>
                                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                            </Link>
                        </li>
                    </div>
                }
               
            </ul>
            <div>
                <Link to="/" className="text-white" style={{textDecoration: "none"}}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;