import datainfo from '../data/data.json';

export default function Design() {
    return (
        <>
            <h2 className='newh'>Design</h2>
            <div className='as col-row d-flex '>
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