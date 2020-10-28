import React from 'react';

const Contact = () => {
    return (
        <section className="contact-container" style={{marginTop: '100px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center" style={{padding: '60px 0' }}>
                        <h5 style={{color: '#1CC7C1', fontWeight: 'bold'}}>CONTACT US</h5>
                        <h2 style={{color: '#ffffff'}}>Always Contact with Us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 mx-auto" style={{ paddingBottom: '80px'}}>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject *"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button style={{width: '150px'}} type="button" className="btn-brand"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;