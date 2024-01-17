import styled from 'styled-components';
import datainfo from '../data/data.json';

const Newwrap = styled.div`
    h1 {
      color: rgb(0 0 0 / 60%);
      line-height: 6;
      text-align: center;
      height: 100px;
      margin: 10px;
      font-style: italic;
    }
    .Newtitle {

    }
`

export default function New() {
    return (
        <Newwrap>
            <>
                <div className='container Newtitle'>
                    <h1>new</h1>
                </div>
                <div className='as col-row d-flex '>
                    {datainfo.newbooks.map((book, index) => (
                        <div key={index}>
                            <img src={book.src} alt={book.alt} />
                            <h4>{book.h4}</h4>
                            <p>{book.p}</p>
                        </div>


                    ))
                    }

                </div>
            </>
        </Newwrap>
    );


}