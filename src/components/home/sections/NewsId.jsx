import React, { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ToTop from '../../../utils/ToTop';
import data from "./data.json";

export default function NewsId() {
    const {id} = useParams();

    // filtering data by id
    const filteredData = data.filter(e => {
        return e.title.toLowerCase().includes(id.toLowerCase());
    })

    // back to func
    const navigate = useNavigate();

    // scroll To func
    useEffect(() => {
      <ToTop/>
    })

    return (
        <div className='news-id container'>
            <i onClick={() => navigate(-1)} class="fa-solid fa-arrow-left"></i>

            {filteredData.map((e, id) => (
                <div className="news-id__card">
                    <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="title">{e.title}</h1>
                    <img src={e.img} alt="image" />
                    <p>{e.text}</p>
                </div>
            ))}
        </div>
    )
}
