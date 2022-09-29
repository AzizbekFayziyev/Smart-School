import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import ToTop from '../../utils/ToTop';
import Navbar from '../navbar/Navbar';

export default function InfoLists() {
        // scroll top func
        useEffect(() => {
            ToTop();
        }, []);
    return (
        <>
            {/* Navbar */}
            <Navbar />

            <div className='lists container'>
                {/* SEO */}
                <Helmet>
                    <title>SINF RO'YXATI</title>
                    <meta name="description" content="Sinf o'quvchilari ro'yxati" />
                </Helmet>

                <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='title'>Sinf Ro'yxati</h1>

                <iframe src="https://onedrive.live.com/embed?cid=9BDD75A6FCF16106&resid=9BDD75A6FCF16106%2142226&authkey=AFKsoar-EMOxoyw&em=2" width="100%" height="500px" frameborder="0" scrolling="no"></iframe>


            </div>
        </>
    )
}
