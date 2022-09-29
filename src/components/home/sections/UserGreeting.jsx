import React, { useEffect, useState } from 'react';
// logo
import logo from "../../../images/logo.png";

export default function UserGreeting() {
    // get user name
    const userFname = localStorage.getItem("fname").toUpperCase();
    const userLname = localStorage.getItem("lname").toUpperCase();

    // calculate time
    const [greeting, setGreeting] = useState();
    let date = new Date().getHours();

    useEffect(() => {
        if (date <= 11) {
            setGreeting("HAYRLI TONG")
        } else if (date <= 20) {
            setGreeting("HAYRLI KUN")
        } else {
            setGreeting("HAYRLI TUN")
        }

    }, [date]);

    return (
        <div className="container">
            <div className="user-nav">
                <a href="#home_table">#DARS JADVALI</a>
                <a href="#home_gallery">#GALLEREYA</a>
                <a href="#home_news">#FOYDALI MA'LUMOTLAR</a>
            </div>

            <div data-aos="zoom-in" className="user">
                <h2 className='user__greeting'>👋{greeting} <span>{userFname ? userFname : "USER"} {userLname ? userLname : ""}!</span></h2>
                <img className="user__img" src={logo} alt="" />
            </div>
        </div>
    )
}
