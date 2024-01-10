import React from 'react';
import { useParams } from 'react-router-dom';
import datainfo from '../data/data.json'


function Detail_newbooks() {
    const { index } = useParams();
    console.log(index)
    // const foundBook = datainfo.detailnewbooks.find((i) => i.index === parseInt(index));
    // // if (!foundBook) {


    // //     return <div>책을 찾을 수 없습니다.</div>;
    // // }

    return (
        <>
            <div className='newbookstitle'>
                <h4>{datainfo.detailnewbooks[index].h4}</h4>
                <p>{datainfo.detailnewbooks[index].p}</p>
            </div>
            <div className='row'>
                <div className='col-7 '>
                    <img className='bookimg' src={datainfo.detailnewbooks[index].src} alt="newbook" />
                </div>
                <div className='title col-5 py-5'>
                    <content className=" detailnewbooks col-4">
                        <h4>{datainfo.detailnewbooks[index].detail.title}</h4>
                        <p>{datainfo.detailnewbooks[index].detail.detail.split('|').map((e) => {
                            return (
                                <>
                                    <p className='pt-4'>{e}</p>


                                </>
                            )
                        })}  </p>

                    </content>
                </div>
            </div>


        </>
    )
}

export default Detail_newbooks