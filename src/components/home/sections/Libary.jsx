import React from 'react'
import { Link } from 'react-router-dom'

export default function Libary() {
    return (
        <div className='libary'>
            <div className="container">

                <p data-aos="zoom-in" className="libary__text">
                <i class="fa-solid fa-book-open"></i>
                    Sayt kutubxonasi orqali siz barcha darsliklarning elektron variantini topishingiz mumkin, shuningdek kutubxonada badiiy kitoblar ham mavjud.
                </p>

                <Link to="/kutubxona">
                <button className="btn-global">
                    KO'RISH <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </button>
                </Link>
            </div>
        </div>
    )
}
