import datainfo from '../data/data.json';

export default function Illust() {
    return (
        <>
            <h2 className='newh'>Illust</h2>
            <div className='newbooks col-row d-flex '>
                {datainfo.asc.map((book, index) => (
                    <div key={index}>
                        <img className='newb' src={book.src} alt={book.alt} />
                        <h3>{book.h3}</h3>
                        <p>{book.p}</p>
                    </div>
                ))
                }

            </div>
        </>
    );
}
