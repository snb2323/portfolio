import { Button } from "bootstrap";

export default function Footer() {
    return (
        <footer id="footerwrap">
            <div className="footer_section row ">
                <div className=" col-3  ">
                    <div className="">
                        <ul className="footer-li d-flex">
                            <li>책</li>
                            <li>굿즈</li>
                            <li>워크숍</li>
                            <li>프로그램</li>
                            <li>아용약관</li>
                            <li>개인정보처리방침</li>

                            <li>아인(Ain)</li>
                            <li>대표:김가영</li>
                            <li>오프라인:서울시 마포구 서교동 483-9 1층 좌축</li>
                            <li>전화:070-8667-0033</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-p d-flex col-3 mb-5">
                    <p>입고문의:ain-bookstore@naver.com 디자인 문의:ain-tubio@naver.com</p>
                    <p>입고문의:ain-bookstore@naver.com 디자인 문의:ain-tubio@naver.com</p>
                </div>
                <div className="footer-p d-flex col-3 ">
                    <p>CompamyReg.No.394-03-01225Newwork Reg.
                        NO.2019-서울마포-2315호
                    </p>
                    <p>Hostingby imweb.
                        Copyright 2024아인서점All rights reserved.
                    </p>
                </div>
                <div className="col-3 d-flex mt-3 ml-3">
                    <ul className="face d-flex">

                        <li>d</li>
                        <li>d</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}