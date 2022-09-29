import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// logo
import logo from "../../images/logo.png"

export default function Register() {
    // register
    const navigate = useNavigate();

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        localStorage.setItem("fname", e.target.Fname.value);
        localStorage.setItem("lname", e.target.Lname.value);
        localStorage.setItem("registered", true);
        navigate("/bosh-menyu");
    }, []);

    useEffect(() => {
        if (localStorage.getItem("registered")) {
            navigate("/bosh-menyu");
        }
    }, []);

    return (
        <div className='register container'>
            <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="title">Formani To'ldiring</h1>

            <form onSubmit={onSubmit}>
                <img data-aos="fade-up" src={logo} alt="logo" />
                <h1>SMART SCHOOL</h1>

                <label htmlFor="Fname">
                    Ismingizni kiriting:
                    <input data-aos="zoom-in-down" required type="text" name='Fname' placeholder='Your first name' />
                </label>

                <label htmlFor="Lname">
                    Familyangizni kiriting:
                    <input data-aos="zoom-in-down" required type="text" name='Lname' placeholder='Your last name' />
                </label>
                <button type="submit">KIRISH</button>
            </form>
        </div>
    )
}
