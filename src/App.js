import './lee.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className="inline-col-group inline-col-group-right">
        <div className="inline-blocked login_btn_item ">
          <a className="fade_link" href="https://ainbooks.kr/site_join_type_choice?back_url=Lw%3D%3D" ><span class="text fixed_transform ">회원가입</span></a>
          <a className="fade_link" href="https://ainbooks.kr/login?back_url=Lw%3D%3D&used_login_btn=Y" ><span class="text fixed_transform ">로그인</span></a>
          <a className="fade_link" href="#" ><span class="text fixed_transform ">서점가이드</span></a>
        </div>
      </div>
      <div id='logo'><img src="img/logo.png" alt='로고' width="161px"></img>
      </div >

      <div className='mainitem d-flex'>
        <ul>
          <li>
            <a href=''>베스트</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>신작도서</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>예술</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>굿즈</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#'>프로그램</a>
          </li>
        </ul>
        <form >

          <input
            className="btn_form"
            type="text"
            name="keyword"
            placeholder="Search"
            defaultValue=""
            title="검색"
          />
          <i className="material-icons">search</i>
        </form >
      </div>

      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        className='brand-list'
      >
        <div class="swiper-slide postion-rel d-flex align-items-center justify-content-center ">
          <div class="swiper" id="mainSwiper">
            <div class="swiper-wrapper">
              <SwiperSlide>
                <div className='img_pc'>
                  <img src="img/bast1.png" alt="이미지_설명_1" />
                </div>
                <div className='bt postion-rel'>

                  <div className='sh position-relative'>
                    <h3>어사이클링도감</h3>
                  </div>
                  <div className='dp position-rel'>
                    <p>무슨 뜻으로 하는 말 은 반복되는 어느 일요일에 대한 <br></br>다섯 편의 연작 소설입니다.<br></br>

                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='img_pc'>
                  <img src="img/bast2.png" alt="이미지_설명_2" />
                </div>
              </SwiperSlide>
              {/* 다른 이미지 슬라이드들도 이어서 추가 */}
            </div>
          </div>
        </div>

      </Swiper >

    </>
  );
}

export default App;
