import React from 'react'
// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
// news data
import data from "./data.json";

export default function News() {

    // slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <div id='home_news' className='news container'>
            <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='title'>Foydali Ma'lumotlar</h1>
            <Slider className='news__slider' {...settings}>
                {data.map((e,id) => (
                    <div data-aos="zoom-in" key={id}>
                        <div className='news__carousel'>
                            <img src={e.img} alt={`image ${id}`} />
                            <h3>{e.title}</h3>
                            <p>{e.text}</p>
                            <Link to={`/foydali/${e.title}`}><button className="btn-global">BATAFSIL</button></Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
