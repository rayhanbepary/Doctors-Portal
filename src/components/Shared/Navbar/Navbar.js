import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to="/home" class="nav-link mr-5 text-secondary" href="#">Home</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-secondary" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-secondary" href="#">Dental services</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/dashboard" class="nav-link mr-5 text-secondary">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <a class={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'}`} href="#">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'}`} href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'}`} href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;