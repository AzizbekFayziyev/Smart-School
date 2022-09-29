import React from 'react';
// images
import gallery1 from "../../../images/home/gallery1.png";

export default function Gallery() {
    return (
        <div id='home_gallery' className='gallery container'>

            <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="title">GALEREYA</h1>

            <div className="row">
                <div className="col-12">
                    <a data-aos="zoom-in" href={gallery1}><img src={gallery1} alt={gallery1} /></a>
                </div>

                <div className="col-6">
                    <a data-aos="zoom-in" href={gallery1}><img src={gallery1} alt={gallery1} /></a>
                </div>
                <div className="col-6">
                    <a data-aos="zoom-in" href={gallery1}><img src={gallery1} alt={gallery1} /></a>
                </div>

                <div className="col-12">
                    <a data-aos="zoom-in" href={gallery1}><img src={gallery1} alt={gallery1} /></a>
                </div>
            </div>
        </div>
    )
}
