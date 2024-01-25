import React from "react";
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
import { useState } from "react";
// import heartImage from "./img/icon_1.png"
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import cartImage from "./img/icon_2.png"
import styled from "styled-components";





export default function Main() {
    const [isHovered, setIsHovered] = useState(false);
    const [clickedItemIndex, setClickedItemIndex] = useState(null);



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

                                    <div className="mainteduli "
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >

                                        <Link to={`/new-books/${index}`}>
                                            <img
                                                src={book.src}
                                                alt={book.alt}
                                            />
                                        </Link>
                                    </div>
                                    <div className="ico">

                                        <span className="ico1">

                                            {clickedItemIndex === index ? (

                                                <HeartFilled style={{ color: 'red', fontSize: '21px' }} onClick={() => setClickedItemIndex(null)} />
                                            ) : (
                                                <HeartOutlined style={{ fontSize: '20px' }} onClick={() => setClickedItemIndex(index)} />
                                            )}
                                        </span>
                                        <span className="ico2"><img onClick={() => {
                                            alert("장바구니담기")
                                        }} style={{ width: "30px", height: "auto" }} src={cartImage} alt="dasda" /></span>
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



