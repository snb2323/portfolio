import React, { } from "react";
import '../../src/lee.scss'
import MainWrapper from './Styled/mainstyle'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import datainfo from "../data/data.json"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';






export default function Main() {
    return (
        <>
            <div className="container maintitle">
                <h1>Best</h1>
            </div>

            <MainWrapper>
                <div className=" mainslide">
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        loop={true}
                        rewind={true}
                        navigation={true}
                        spaceBetween={50}
                        slidesPerView={3}
                        scrollbar={{ draggable: true, dragSize: 24 }}

                    >
                        {datainfo.Design.map((book, index) => (
                            <div className="mainitem">

                                <SwiperSlide key={index}>

                                    <div className="mainteduli">

                                        <Link to={`/new-books/${index}`}>
                                            <img
                                                src={book.src}
                                                alt={book.alt}
                                            />

                                        </Link>
                                    </div>
                                    <div className="maintedulip">
                                        <strong><h4>{book.h4}</h4></strong>
                                        <strong><p>{book.p}</p></strong>
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>
                </div>

            </MainWrapper>
        </>
    );
}



