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

                <div class="swiper" id="mainSwiper">
                    <div class="swiper-wrapper" key={i}>

                        <div class=" swiper-slide postion-rel d-flex align-items-center justify-content-center " style={{ bordertop: " 1px solid black !import" }}>
                            <SwiperSlide className='Bestsw bg-white position-relative '>
                                <div className='img_pc position-relative'>
                                    <img src={best_slide.src} alt={`ain_bast ${i + 1}`}>
                                    </img>
                                </div>

                                <div className='sh position-relative'>
                                    {best_slide.h3 && best_slide.h3.split('|').map((v, i) => (
                                        <React.Fragment key={i}>
                                            {v}
                                            <br />
                                        </React.Fragment>
                                    ))}

                                    <div className='dp position-relative'>
                                        {best_slide.p && best_slide.p.split('|').map((v, i) => (
                                            <React.Fragment key={i}>
                                                {v}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div className='swiper-pagination'>
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