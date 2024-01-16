import React from "react"
import '../../src/lee.scss'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';






const MainWrapper = styled.div`
  background: #f5f5f5;
  .mainslide {
    img {
      width: 250px;
      height: 280px;
    }
    h1 {
      line-height: 5;
      text-align: center;
      height: 150px;
      margin: 10px;
    }
    .mainteduli {
      display: flex;
      margin: 38px 0  0 40px !important;
      border: 15px solid white;
      width: 280px;
      height: 380px;

      .swiper-slide-next {
        margin: 0;
      }
    }

    .maintedulip p {

        height: 30px;
        margin: 10px 0
    }
    .swiperwrap {
      border-radius: 20px;
    }
    .mainitem {
        width: 274px;
        height:373px;
    }
    .swiper-button-prev:after{
        position:absolute;
        right:15px;
        bottom:20px;
    }
    .swiper-button-next:after{
        position:absolute;
        left:15px;
        bottom:20px;
    }
    .swiper-scrollbar {

    margin-top:10px;
      position:absolute;
      left:25%;
      background-color:rgb(0 0 0 / 60%);
      width: 50%;
      border-radius: 4px;

    }
  }
  .swiper-slide {
    flex-grow: 3;
    width: 350px !important;
    margin: 0 !important;
}

`;


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




                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                    >
                        <div className="swiperwrap">
                            <div className="mainitem">
                                <SwiperSlide >
                                    <div className="mainteduli">
                                        <img src="https://indiepub.kr/web/product/medium/202401/71374400613482ef80909ccac755f4aa.png"></img>
                                    </div>
                                    <div className="maintedulip">
                                        <strong>  <p>행복의 정석 1편</p></strong>
                                        <strong><p>14,000원 </p></strong>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </div>

                        <SwiperSlide>
                            <div className="mainteduli">
                                <img src="https://indiepub.kr/web/product/medium/202401/fd57498b0d7217090e036eec64a65bf3.jpg" alt="이미지"></img>
                            </div>

                            <div className="maintedulip">
                                <strong>  <p>옥희씨의 나들이</p></strong>
                                <strong><p>16,000원 </p></strong>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="mainteduli">
                                <img src="https://indiepub.kr/web/product/medium/202401/b9acf1f812b33a5cf5ac418114620f02.png"></img>

                            </div>

                            <div className="maintedulip">
                                <strong>  <p>초록플래닛 166</p></strong>
                                <strong><p>15,000원 </p></strong>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mainteduli">
                                <img src="https://indiepub.kr/web/product/medium/202401/2c27513e9c1acf4f78ed48f9ad7803ed.png"></img>

                            </div>

                            <div className="maintedulip">
                                <strong>  <p>같이 겉자,우리</p></strong>
                                <strong><p>16,000원 </p></strong>
                            </div>
                        </SwiperSlide>

                        ...
                    </Swiper>

                </div >

            </MainWrapper>

        </>
    )

}

