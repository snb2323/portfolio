import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import datainfo from '../data/data.json';
import { Dropdown, DropdownButton } from 'react-bootstrap';



function Detail_newbooks() {
    const { index } = useParams();
    const [option, setoption] = useState(false)
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);

    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    };


    const handlechange = (e) => {
        setoption(e);
    };

    return (
        <>

            <div className='newbookstitle'>
                <h3 className='detailh3'>{datainfo.detailnewbooks[index].h4}</h3>
                <p>{datainfo.detailnewbooks[index].p}</p>
            </div>
            <div className='row over'>
                <div className='col-7 '>
                    <img className='bookimg' src={datainfo.detailnewbooks[index].src} alt="newbook" />
                </div>
                <div className='detaildata col-5 py-5'>
                    <content className="detailnewbooks col-4">
                        <h4 className='detailh'>"{datainfo.detailnewbooks[index].detail.subject}"</h4>
                        <div className="detalip">
                            <p>{datainfo.detailnewbooks[index].detail.inner}</p>
                            <p>{datainfo.detailnewbooks[index].detail.detail.split('|').map((e) => {
                                return (
                                    <>
                                        <p className='pt-4'>{e}</p>
                                    </>
                                )
                            })}</p>
                        </div>
                        <strong> <div>저자소개</div></strong>
                        <strong>{datainfo.detailnewbooks[index].detail.auth}</strong>

                        <div>
                            <span>판 형 142*180mm</span>
                        </div>
                        <div>
                            <span>분 량: 300p</span>
                        </div>
                        <div className="datail_item">
                            <div>
                                <span>
                                    <strong>구매혜택</strong> 170 신규가입 포인트 적립예정 적립예정
                                </span>
                            </div>
                            <div>
                                <span>
                                    <strong>배송비</strong> 3,000원 (50,000원 이상 무료배송) |도서산간 배송비 추가
                                </span>
                            </div>
                            <div>
                                <span>
                                    <strong>배송안내</strong> 로젠배로 발송되며 택배비는 3000원 / 제주도 3000원 추가 / 50,000원 이상 구매 시 택배비가 무료입니다.
                                </span>
                                <div className="mt-3">
                                    <DropdownButton
                                        id="Dropdown"
                                        title={option === true ? "방문수령" : "택배"}
                                    >
                                        <Dropdown.Item onMouseDown={() => handlechange(false)}>택배</Dropdown.Item>
                                        <Dropdown.Item onMouseDown={() => handlechange(true)}>방문수령</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </div>
                            <div className='opt'>
                                <div className='opt_span'>
                                    <span>수량</span>
                                </div>
                                <div className='opt_btn'>
                                    <button className='quantity-btn' onClick={handleDecrement}>-</button>
                                    <input className='formin' type="text" value={quantity} />
                                    <button className='quantity-btn' onClick={handleIncrement}>+</button>

                                    <span className='prise'>{22_000 * quantity}원</span>
                                </div>

                            </div>
                        </div>
                    </content>
                </div>
            </div>

        </>
    );
}

export default Detail_newbooks;