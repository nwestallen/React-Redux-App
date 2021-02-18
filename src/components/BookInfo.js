//Front cover of book with info/details?
import { connect } from 'react-redux';
import { closeBookInfo, removeBook } from './../actions';

const BookInfo = props => {

    const handleClick = e => {
        if(e.target === e.currentTarget) {
            props.closeBookInfo();
        }
    };

    const handleRemove = e => {
        props.removeBook(props.bookInfo.key);
    }

    if (props.loading) {
        return(
            <div onClick={handleClick} className='bookmodal'>
                <div className='bookinfo'>
                 <h1>Loading...</h1>
                </div>
            </div>
        )
    }
    else if (!props.show) {
        return null
    } else if (!props.bookInfo.title) {
        return(
            <div onClick={handleClick} className='bookmodal'>
                <div className='bookinfo'>
                    <h1>Error</h1>
                    <p>Your book did not load. This is likely due to a bad key.</p>
                </div>
            </div>
        )
    } else {
    return(
        <div onClick={handleClick} className='bookmodal'>
            <div className='bookinfo'>
                <h2>Book Info</h2>
                <h3>{props.bookInfo.title}</h3>
                <p>{props.bookInfo.subtitle}</p>
                <img alt={props.bookInfo.title} src={props.bookInfo.coverLink} />
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
        )
    }
    
};

const mapStateToProps = state => {
    return {
        show: state.showInfo,
        error: state.error,
        loading: state.isLoading,
        bookInfo: state.loadedBook
    }
}

export default connect(mapStateToProps, { closeBookInfo, removeBook })(BookInfo);