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
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {datainfo.User.map((book, index) => (
                            <div className="mainitem">

                                <SwiperSlide key={index}>
                                    <div className="userswiper">
                                        <div className="mainteduli">
                                            <img
                                                src={book.src}
                                                alt={book.alt}
                                            />
                                        </div>

                                        <div className="maintedulip usertext">
                                            <strong><h4>{book.h4}</h4></strong>
                                            <strong><p>{book.p}</p></strong>
                                            <div className="review">
                                                <p className="">김** 24.01.19</p>
                                                <strong>   <div className="rest">
                                                    5.0
                                                </div>
                                                </strong>
                                            </div>
                                        </div>
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
