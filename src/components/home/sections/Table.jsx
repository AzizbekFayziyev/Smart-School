import React from 'react'

export default function Table() {
    const day = new Date().getDay();
    let calculatedDay = "";

    if (day == 0) {
        calculatedDay = "YAKSHANBA";
    } else if (day == 1) {
        calculatedDay = "DUSHANBA";
    } else if (day == 2) {
        calculatedDay = "SESHANBA";
    } else if (day == 3) {
        calculatedDay = "CHORSHANBA";
    } else if (day == 4) {
        calculatedDay = "PAYSHANBA";
    } else if (day == 5) {
        calculatedDay = "JUMA";
    } else {
        calculatedDay = "SHANBA";
    };

    return (
        <div id='home_table' className="container">
            <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='title'>Dars Jadvali</h1>
            <p>Bugun <span className='color'>{calculatedDay}</span></p>

            <div className='table-responsive'>
                <table className='table'>
                    <tr className={day == 1 ? "actived-day" : null}>
                        <th><i className="fa-solid fa-calendar-days"></i> DUSHANBA</th>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Ona Tili</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Rus tili</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Algebra</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Geometiya</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> O'.Tarix</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Ingiliz Tili</td>
                    </tr>

                    <tr className={day == 2 ? "actived-day" : null}>
                        <th><i className="fa-solid fa-calendar-days"></i> SESHANBA</th>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Fizika</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Kimyo</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Tarbiya</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Biologiya</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> J.Tarix</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> J.Tarbiya</td>
                    </tr>

                    <tr className={day == 3 ? "actived-day" : null}>
                        <th><i className="fa-solid fa-calendar-days"></i> CHORSHANBA</th>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Ona Tili</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Adabiyot</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Ingiliz Tili</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> O'.Tarix</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Algebra</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Geometriya</td>
                    </tr>

                    <tr className={day == 4 ? "actived-day" : null}>
                        <th><i className="fa-solid fa-calendar-days"></i> PAYSHANBA</th>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Huquq</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Informatika</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Texnologiya</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Geografiya</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Ingiliz Tili</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> J.Tarbiya</td>
                    </tr>

                    <tr className={day == 5 ? "actived-day" : null}>
                        <th><i className="fa-solid fa-calendar-days"></i> JUMA</th>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Tarbiyaviy.S</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Biologiya</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Rus Tili</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Kimyo</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Ona Tili</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Informatika</td>
                    </tr>

                    <tr className={day == 6 ? "actived-day" : null}>
                        <th><i className="fa-solid fa-calendar-days"></i> SHANBA</th>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Geografiya</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Adabiyot</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Chizmachilik</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Algebra</td>
                        <td><i className="fa-sharp fa-solid fa-book"></i> Fizika</td>
                    </tr>

                </table>
            </div>
        </div>
    )
}
