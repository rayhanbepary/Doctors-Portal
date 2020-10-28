import React from 'react';
import Chair from '../../../images/chair.png'
import { Link } from "react-router-dom";

const HeaderMain = () => {
    return (
        <main style={{height: '500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>
                    Your new smile <br/> starts here
                </h1>
                <p style={{ marginTop: '25px', marginBottom: '35px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a minus nihil nesciunt veritatis? Dignissimos rem consequatur tempora magnam</p>
                <Link style={{color: 'white',textDecoration: 'none'}} to="/appointment" className="btn-brand">GET APPOINTMENT</Link>
            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" className="img-fluid"/>
            </div>
        </main>

    );
};

export default HeaderMain;