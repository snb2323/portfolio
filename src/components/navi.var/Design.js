import React from 'react';
import datainfo from '../../data/data.json';
import { Link } from 'react-router-dom';


export default function Design() {
    return (
        <>
            <h2 className='navivartitle'>Design</h2>
            <div className='as col-row d-flex '>
                {datainfo.Design.map((book, index) => (
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