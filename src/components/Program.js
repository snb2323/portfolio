import React from "react";
import { Link } from 'react-router-dom';
import datainfo from '../data/data.json'


function Program() {
    return (
        <>
            <h2 className='newh'>Program</h2>
            <div className='newbooks col-row d-flex '>
                {datainfo.newbooks.map((book, index) => (
                    <div key={index} style={{ width: "270px", height: "270" }}>

                        <Link to={`/new-books/${index}`}>
                            <img className='newb' src={book.src} alt={book.alt} />
                        </Link>
                        <h4 style={{ fontSize: "14px" }}>{book.h4}</h4>
                        <p>{book.p}</p>
                    </div>


                ))
                }

            </div>
        </>
    );
}
export default Program