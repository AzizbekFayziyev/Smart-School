import React from 'react'
// img
import aboutImg from "../../../images/home/about.png"

export default function About() {
    return (
        <div className="container about">

            <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="title">Sayt Haqida</h1>

            <div data-aos="zoom-in" className="about__card">
                <img className="about__card__img" src={aboutImg} alt="about imgage" />

                <div className="about__card__text">
                    <p>
                        Ushbu veb sayt <span className='color'>9-'B'</span> sinf o'quvchilari va sinf rahbari uchun tayyorlandi. Sayt orqali siz onlayn elektron <span className='color'>kutubxona</span>dan foydalanishingiz, kunlik <span className='color'>qaydnomalar</span> yozib borishingiz, har bir o'quvchi haqida <span className='color'>ma'lumotga</span> ega bo'lishingiz mumkin! Shuningdek ushbu saytdan siz sinf <span className="color">dars jadvali</span>ni onlayn tarzda kuzatib borishingiz va foydali <span className="color">ma'lumotlar</span>ni o'qish imkoniga ega bo'lasiz.</p>
                        <h3 className='text-light color'>SMART SCHOOL</h3>
                </div>
            </div>

        </div>
    )
}
