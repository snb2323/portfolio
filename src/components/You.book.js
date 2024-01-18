import React from "react"
import '../../src/lee.scss'
import MainWrapper from './Styled/mainstyle'
import { Router, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import datainfo from "../data/data.json"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';



export default function User() {
    return (
        <>
            <div className="usertitle ">
                <strong> <h3 style={{ color: '#000000' }}>타인의 책장</h3></strong>
                <p style={{ color: "#999999" }}>고객님들의 직접 작성한 리뷰를 확인해보세요.</p>
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
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {datainfo.User.map((book, index) => (
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
                                        <strong><h3>{book.h5}</h3></strong>
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
