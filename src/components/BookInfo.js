//Front cover of book with info/details?
import { connect } from 'react-redux';
import { closeBookInfo } from './../actions';

const BookInfo = props => {

    const handleClick = e => {
        props.closeBookInfo();
    };

    if (!props.show) {
        return null
    } else {
    return(
        <div onClick={handleClick} className='bookmodal'>
            <div className='bookinfo'>
                <h2>Book Info</h2>
                <p>{props.bookInfo.title}</p>
                <p>{props.bookInfo.subtitle}</p>
                <img alt={props.bookInfo.title} src={props.bookInfo.coverLink} />
            </div>
        </div>
        )
    }
    
};

const mapStateToProps = state => {
    return {
        show: state.showInfo,
        bookInfo: state.loadedBook
    }
}

export default connect(mapStateToProps, { closeBookInfo })(BookInfo);