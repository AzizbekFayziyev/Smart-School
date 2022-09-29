import React, { useEffect, useState } from 'react';
// files
import informatika from "../../files/informatika.pdf";
import ingilizTili from "../../files/ingiliz tili.pdf";
import biologiya from "../../files/biologiya.pdf";
import kimyo from "../../files/kimyo.pdf";
import uzTarix from "../../files/ozbekiston tarixi.pdf";
import chizmachilik from "../../files/chizmachilik.pdf";
import geometriya from "../../files/geometriya.pdf";
import huquq from "../../files/huquq.pdf";
import algebra from "../../files/algebra.pdf";
import onaTili from "../../files/ona tili.pdf";
import iqtisod from "../../files/iqtisod.pdf";
import jTarix from "../../files/jahon tarixi.pdf";
import texnologiya from "../../files/texnologiya.pdf";
import fizika from "../../files/fizika.pdf";
import adabiyot from "../../files/adabiyot.pdf";
import rusTili from "../../files/rus tili.pdf";
import geografiya from "../../files/geografiya.pdf";
// images
import img1 from "../../images/libary/img1.png";
import img2 from "../../images/libary/img2.png";
import img3 from "../../images/libary/img3.png";
import img4 from "../../images/libary/img4.png";
import img5 from "../../images/libary/img5.png";
import img6 from "../../images/libary/img6.png";
import img7 from "../../images/libary/img7.png";
import img8 from "../../images/libary/img8.png";
import img9 from "../../images/libary/img9.png";
import img10 from "../../images/libary/img10.png";
import img11 from "../../images/libary/img11.png";
import img12 from "../../images/libary/img12.png";
import img13 from "../../images/libary/img13.png";
import img14 from "../../images/libary/img14.png";
import img15 from "../../images/libary/img15.png";
import img16 from "../../images/libary/img16.png";
import img17 from "../../images/libary/img17.png";
import { Helmet } from 'react-helmet';
import Navbar from '../navbar/Navbar';
import ToTop from '../../utils/ToTop';

export default function Libary() {
    // books data
    const [lessonName, setLessonName] = useState("");
    const [bookName, setBookName] = useState("");
    const [bookType, setBookType] = useState(true);

    const lessons = [
        {
            img: img1,
            link: informatika,
            text: "INFORMATIKA"
        },
        {
            img: img2,
            link: ingilizTili,
            text: "INGILIZ TILI"
        },

        {
            img: img3,
            link: biologiya,
            text: "BIOLOGIYA"
        },
        {
            img: img4,
            link: kimyo,
            text: "KIMYO"
        },

        {
            img: img5,
            link: uzTarix,
            text: "O'ZBEKISTON TARIXI"
        },

        {
            img: img6,
            link: chizmachilik,
            text: "CHIZMACHILIK"
        },

        {
            img: img7,
            link: geometriya,
            text: "GEOMETRIYA"
        },

        {
            img: img8,
            link: huquq,
            text: "HUQUQ"
        },

        {
            img: img9,
            link: algebra,
            text: "ALGEBRA"
        },

        {
            img: img10,
            link: onaTili,
            text: "ONA TILI"
        },

        {
            img: img11,
            link: iqtisod,
            text: "IQTISOD"
        },

        {
            img: img12,
            link: jTarix,
            text: "JAHON TARIXI"
        },

        {
            img: img13,
            link: texnologiya,
            text: "TEXNOLOGIYA"
        },

        {
            img: img14,
            link: fizika,
            text: "FIZIKA"
        },

        {
            img: img15,
            link: adabiyot,
            text: "ADABIYOT"
        },

        {
            img: img16,
            link: rusTili,
            text: "RUS TILI"
        },

        {
            img: img17,
            link: geografiya,
            text: "GEOGRAFIYA"
        },
    ];

    const filteredLessons = lessons.filter(e => {
        return e.text.toLowerCase().includes(lessonName.toLowerCase());
    });

    const books = [
        {
            img: "https://assets.asaxiy.uz/product/items/desktop/5e15c1da3f9a8.jpg.webp",
            link: "http://samkutubxona.uz/uploads/kitoblar/sharq_adabiyoti/Alpomish.pdf",
            text: "ALPOMISH"
        },

        {
            img: "https://oyina.uz/storage/audiobooks/August2021/SyizgMm2iR9qpWfBP62X.jpg",
            link: "https://kitobsevar.uz/kxpv/xrpt_139ceoug6ipvfzhosp6r1pbkpjbc8dvy7u1aakg7tyr1l1e6g0l7omh7xi9umuhie9jfjrb4ets.pdf",
            text: "FARHOD VA SHIRIN"
        },

        {
            img: "https://kitobxon.com/img_knigi/3533.jpg",
            link: "http://samkutubxona.uz/uploads/kitoblar/ozbek_adabiyoti/Shum%20bola.pdf",
            text: "SHUM BOLA"
        },

        {
            img: "https://assets.asaxiy.uz/product/items/desktop/5e15be6070c21.jpg.webp",
            link: "http://samkutubxona.uz/uploads/Uzbek%20adabiyoti/Yulduzlar_mangu_yonadi.pdf",
            text: "YULDUZLAR MANGU YONADI"
        },

        {
            img: "http://samkutubxona.uz/uploads/%D0%A0%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA2.jpg",
            link: "http://samkutubxona.uz/uploads/kitoblar/ozbek_adabiyoti/Alisher%20Navoiy%20-%20Lison%20ut-tayr%20%5B%40Elektron_kitoblar_Uz%5D.pdf",
            text: "LISON UT-TAYR"
        },

        {
            img: "https://kitobxon.com/img_knigi/7023.jpg",
            link: "http://samkutubxona.uz/uploads/Uzbek%20adabiyoti/Boburnoma.pdf",
            text: "BOBURNOMA"
        },
    ];

    const filteredBooks = books.filter(e => {
        return e.text.toLowerCase().includes(bookName.toLowerCase())
    });

        // scroll top func
        useEffect(() => {
            ToTop();
        }, []);

    return (
        <>
            {/* Navbar */}
            <Navbar />
            <div className='libary container'>
                {/* SEO */}
                <Helmet>
                    <title>KUTUBXONA</title>
                    <meta name="description" content="ONLAYN KUTUBXONA" />
                    <meta name="keywords" content="elektron kutubxona, onlayn kutubxona, kitobxona, darsliklar, pdf darsliklar, pdf kitoblar, maktab darsliklari" />
                </Helmet>

                <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="title">Elektron Kutubxona</h1>

                <div className="inp-cnt">
                    <input data-aos="zoom-in-down" onChange={(e) => { bookType ? setLessonName(e.target.value) : setBookName(e.target.value) }} type="search" placeholder='Kitoblarni qidirish...' />
                    <div className="type">

                        <label htmlFor="darsliklar">Darsliklar
                            <input onFocus={() => setBookType(true)} checked className='form-check-input' type="radio" name="type" id="darsliklar" />
                        </label>

                        <label htmlFor="Badiiy">Badiiy kitoblar
                            <input onFocus={() => setBookType(false)} className='form-check-input' type="radio" name="type" id="Badiiy" />
                        </label>
                    </div>
                </div>

                <div className="libary-cnt">
                    {bookType ?
                        filteredLessons.length ? filteredLessons.map(e => (
                            <div data-aos="zoom-in-up" className="libary__card">
                                <img src={e.img} alt={e.text} />
                                <h3>{e.text}</h3>
                                <div className="links">
                                    <a href={e.link}><button className="btn-global">Onlayn ko'rish</button></a>
                                    <a download href={e.link}><button className="btn-global btn-global__blue">Yuklash</button></a>
                                </div>
                            </div>
                        )) : <p className='my-5'>SIZ IZLAGAN KITOB TOPILMADI ):</p> :
                        filteredBooks.length ? filteredBooks.map(e => (
                            <div data-aos="zoom-in-up" className="libary__card">
                                <img src={e.img} alt={e.text} />
                                <h3>{e.text}</h3>
                                <div className="links">
                                    <a href={e.link}><button className="btn-global">Onlayn ko'rish</button></a>
                                    <a download href={e.link}><button className="btn-global btn-global__blue">Yuklash</button></a>
                                </div>
                            </div>
                        )) : <p className='my-5'>SIZ IZLAGAN KITOB TOPILMADI ):</p>
                    }
                </div>
            </div>
        </>
    )
}
