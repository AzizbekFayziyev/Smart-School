import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    // dark / light mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    const mode = useCallback(() => {
        setIsDarkMode(e => !e);

        document.body.classList.toggle("dark");
    }, [isDarkMode])

    // vibration
    const onVibrate = useCallback(() => {
        navigator.vibrate([500]);
    }, []);

    // Hide NavBar as Scroll down
    useEffect(() => {
        var lastScrollTop;
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                navbar.style.bottom = '-80px';
            }
            else {
                navbar.style.bottom = '0';
            }
            lastScrollTop = scrollTop;
        });
    }, [])

    return (
        <>
            <div onClick={mode} className="dark-light-mode">
                {
                    isDarkMode ? (
                        <i className="fa-regular fa-lightbulb"></i>

                    ) :
                        (
                            <i className="text-warning fa-solid fa-lightbulb"></i>
                        )
                }

            </div>

            <ul id='navbar' className='nav'>

                <li className="nav-item">
                    <NavLink onClick={onVibrate} to="/bosh-menyu" className="nav-link"><i className="fa-solid fa-house"></i> Bosh Menyu</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink onClick={onVibrate} to="/kutubxona" className="nav-link"><i className="fa-sharp fa-solid fa-book"></i> Kutubxona</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink onClick={onVibrate} to="/qaydnomalar" className="nav-link"><i class="fa-solid fa-check"></i> Qaydnomalar</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink onClick={onVibrate} to="/sinf-ro'yxati" className="nav-link"><i className="fa-solid fa-clipboard-list"></i> Sinf Ro'yxati</NavLink>
                </li>

            </ul>
        </>
    )
}
