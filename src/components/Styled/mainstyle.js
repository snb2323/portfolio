import styled from "styled-components";

const MainWrapper = styled.div`
  background: #f5f5f5;
  .mainslide {
    img {
      width: 250px;
      height: 280px;
    }
    .mainslide{
        display:flex;
    }
    h1 {
      color: #212529;
      line-height: 5;
      text-align: center;
      height: 150px;
      margin: 10px;
    }
    .mainteduli {
      display: flex;
      margin: 38px 0  40px 80px !important;
      border: 15px solid white;
      width: 280px;
      height: 380px;

      .swiper-slide-next {
        margin: 0;
      }
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
      left:30%;
      background-color:#d1edff;
      width: 40%;
      border-radius: 4px;
    }
    .swiper-scrollbar-drag {
        background:white;
    }
  }
  .swiper-slide {
    flex-grow: 3;
    width: 450px !important;
    margin: 0 !important;
}

.usertext {
    position: absolute;
    bottom: -14px;
    font-size: 12.6px;
}
.usertext p{
  color:#777777;
}  
.ico {
  z-index: 100000;
    position: absolute;
    bottom: 60px;
    left: 92px;}
    .youbook{
      img: width: 100px
    }
`;

export default MainWrapper
