//Front cover of book with info/details?

const show = false;

const BookInfo = props => {
    if (!show) {
        return null
    } else {
    return(
        <div className='bookmodal'>
        <div className='bookinfo'>
            <h2>Book Info</h2>
        </div>
        </div>
        )
    }
    
};

export default BookInfo;