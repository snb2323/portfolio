import React from 'react';
import { Link } from 'react-router-dom';
import datainfo from '../../data/data.json';

export default function Essay() {
    return (
        <>
            <h2 className='navivartitle'>Essay</h2>
            <div className='as col-row d-flex '>
                {datainfo.Essay.map((book, index) => (
                    <div key={index}>
                        <Link to={`/new-books/${index}`}>
                            <img style={{ width: "340px", height: "340px" }} className='newb' src={book.src} alt={book.alt} />
                        </Link>
                        <h4>{book.h4}</h4>
                        <p>{book.p}</p>
                    </div>


                ))
                }

            </div>
        </>
    );
}