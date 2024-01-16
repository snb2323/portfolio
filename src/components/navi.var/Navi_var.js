import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import mainlogo from '../img/logo.png';

function Navi_var() {

    const [clicked, setClicked] = useState(false);

    const handleLogoclick = () => {
        setClicked(!clicked);
    }

    return (

        <>

            <div className="navivar">
                <div className="mypage">
                    <ul>
                        <li>
                            <a href='https://github.com/snb2323/portfolio' target="_blank" rel="noopener noreferrer">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            <Link to="/">
                <img onClick={handleLogoclick} className='logo' src={mainlogo} alt='로고' width="161px" />
            </Link>




            <div className='mainitem d-flex'>

                <ul>
                    <li>
                        <Link to="/Essay">
                            <span>에세이/시</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <Link to="/Design">
                        <span>디자인/문화</span>
                    </Link>
                </ul>
                <ul>
                    <Link to="/Illust">
                        <span>만화/일러스트</span>
                    </Link>
                </ul>
                <ul>
                    <Link to="/Photo">
                        <span>사진</span>
                    </Link>
                </ul>
                <ul>
                    <Link to="/Postcard">
                        <span>엽서북</span>
                    </Link>
                </ul>

                <form >
                    <input
                        className="btn_form"
                        type="text"
                        name="keyword"
                        placeholder="Search"
                        defaultValue=""
                    />
                    <CiSearch />


                </form >
            </div>
        </>
    )
}

export default Navi_var