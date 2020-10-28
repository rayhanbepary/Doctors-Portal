import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctors = () => {

    const containerStyle = {
        background: '#F4FDFB',
        height: '100%',
        padding: '0',
        margin: '0',
        paddingBottom: '50px'
    }

    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        
        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))

    }


    return (
        <div className="dashboard-container">
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2" style={{paddingLeft: '0'}}>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h1>Add Doctors</h1>

                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputName1">Name</label>
                            <input type="text" className="form-control" onBlur={handleBlur} id="exampleInputName1" placeholder="Name" name="name"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" onBlur={handleBlur} id="exampleInputEmail1" placeholder="Enter email" name="email"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Upload a Image</label>
                            <input type="file" className="form-control-file" onChange={handleFileChange} id="exampleFormControlFile1"/>
                        </div>
                        <button type="submit"className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddDoctors;