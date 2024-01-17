import React from "react"
import { Link } from "react-router-dom";

function List_box() {
    return (
        <>
            <div className='site d-flex'>
                <ul>
                    <li>
                        <Link to="/new-books">
                            <img src='./img/icon1.png' alt='신작도서' />
                            <span>신작도서</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="Bestbook">
                            <img src='./img/icon2.png' alt='베스트'></img>
                            <span>베스트</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="Curation">
                            <img src='./img/icon3.png' alt='큐레이션'></img>
                            <span>큐레이션</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="Goods">
                            <img src='./img/icon4.png' alt='굿즈'></img>
                            <span>굿즈</span>
                        </Link >
                    </li>
                    <li>
                        <Link to="Program">
                            <img src='./img/icon5.png' alt='프로그램'></img>
                            <span>프로그램</span>
                        </Link>
                    </li>

                </ul>

            </div>
        </>
    )
}

export default List_box