import React from 'react';
import FeaturedImg from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="container featured-container">
            <div className="row">
                <div className="col-md-6">
                    <img src={FeaturedImg} alt="" style={{width: '100%', height: '550px'}}/>
                </div>
                <div className="col-md-6 featured-text">
                    <h2>Exceptional Dental <br/> Care, on Your Terms</h2>
                    <p style={{lineHeight: '1.7'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas corrupti doloremque, illum perspiciatis mollitia fugit sapiente? Eveniet reprehenderit corrupti ullam fugiat exercitationem autem necessitatibus id libero nobis illum soluta maxime repudiandae, nihil in? Quis debitis rerum reprehenderit impedit expedita explicabo quas eum? Ut aperiam inventore alias dolore consequatur fugiat repellendus? Nulla, repellat iusto adipisci reprehenderit, aut iure deleniti maxime maiores, architecto tenetur a est neque incidunt odit veniam molestias saepe? Delectus magnam deleniti ratione, nulla repellendus fugit id quae? Voluptatum explicabo ullam sint, alias libero ipsam tenetur deleniti unde at voluptate vero totam facilis officia. Consequuntur nemo voluptatibus quisquam.</p>
                    <button className="btn-brand">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;