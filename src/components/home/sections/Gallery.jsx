import React from 'react';
// images
import gallery1 from "../../../images/home/gallery1.png";
import gallery2 from "../../../images/home/gallery2.png";
import gallery3 from "../../../images/home/gallery3.png";
import gallery4 from "../../../images/home/gallery4.png";

export default function Gallery() {
    return (
        <div id='home_gallery' className='gallery container'>

            <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="title">GALEREYA</h1>

            <div className="row">
                <div className="col-12">
                    <a data-aos="zoom-in" href={gallery1}><img src={gallery1} alt={gallery1} /></a>
                </div>

                <div className="col-6">
                    <a data-aos="zoom-in" href={gallery2}><img src={gallery2} alt={gallery2} /></a>
                </div>
                <div className="col-6">
                    <a data-aos="zoom-in" href={gallery3}><img src={gallery3} alt={gallery3} /></a>
                </div>

                <div className="col-12">
                    <a data-aos="zoom-in" href={gallery4}><img src={gallery4} alt={gallery4} /></a>
                </div>
            </div>
        </div>
    )
}
