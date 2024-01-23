import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';



function Best_slide(props) {
    return (

        <Swiper
            modules={[Navigation, EffectFade, Autoplay, Pagination]} effect="fade"
            loop={true}
            rewind={true}
            navigation={true}



            autoplay={{
                delay: 2500,
            }}

            spaceBetween={50}
            slidesPerView={1}
            pagination={{

                clickable: true,
                type: "fraction",
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
            }
            }


        >
            {props.data && props.data.best_slide && props.data.best_slide.map((best_slide, i) => (

                <div key={`swiperSlide=${i}`} class="swiper" id="mainSwiper">
                    <div class="swiper-wrapper" key={i}>

                        <div class=" swiper-slide postion-rel d-flex align-items-center justify-content-center " style={{ bordertop: " 1px solid black !import" }}>
                            <SwiperSlide key={`slide-${i}`} className='Bestsw bg-white position-relative '>
                                <div className='img_pc position-relative'>
                                    <img src={best_slide.src} alt={`ain_bast ${i + 1}`}>
                                    </img>
                                </div>

                                <div className='sh position-relative' key={`sh-${i}`}>
                                    {best_slide.h3 && best_slide.h3.split('|').map((v, j) => (
                                        <React.Fragment key={`h3-${j}`}>
                                            {v}
                                            <br />
                                        </React.Fragment>
                                    ))}

                                    <div className='dp position-relative' key={`dp-${i}`}>
                                        {best_slide.p && best_slide.p.split('|').map((v, k) => (
                                            <React.Fragment key={`p-${k}`}>
                                                {v}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div className='swiper-pagination ' key={`pagination${i}`}>
                                        <span className='swiper-pagination-bullet'></span>

                                    </div>
                                </div>

                            </SwiperSlide>

                        </div>
                    </div>
                </div>
            ))}

        </Swiper >
    )
}
export default Best_slide