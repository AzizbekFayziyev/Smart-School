import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
// Components
import ToTop from '../../utils/ToTop';
import Navbar from '../navbar/Navbar';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Libary from './sections/Libary';
import News from './sections/News';
import Table from './sections/Table';
import UserGreeting from './sections/UserGreeting';

export default function Home() {
    // scroll top func
    useEffect(() => {
        ToTop();
    }, []);

    return (
        <>
            {/* Navbar */}
            <Navbar />
            <main id='home'>
                {/* SEO */}
                <Helmet>
                    <title>SMART SCHOOl</title>
                    <meta name="description" content="BOSH MENYU" />
                </Helmet>

                {/* User Greeting */}
                <UserGreeting />
                {/* About Section */}
                <About />
                {/* Table Section */}
                <Table />
                {/* Libary Section*/}
                <Libary />
                {/* Gallery Section */}
                <Gallery />
                {/* News Section */}
                <News />
            </main>
        </>
    )
}
