import styled from 'styled-components';
import datainfo from '../data/data.json';
import { Route, Link } from 'react-router-dom';
import Navibook from './Styled/navibook';




export default function New() {
    return (
        <>
            <Navibook>

                <h1 className='newtitle'>New</h1>
                <div className='as col-row d-flex'>
                    {datainfo.New.map((book, index) => (
                        <div className='col-3' key={index} >
                            <Link to={`/new-books/${index}`}>
                                <img style={{ width: "400px", height: "400px" }} className='newb' src={book.src} alt={book.alt} />
                            </Link>
                            <h4>{book.h4}</h4>
                            <p>{book.p}</p>
                        </div>


                    ))
                    }

                </div>
            </Navibook>

        </>
    )


}