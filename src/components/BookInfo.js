//Front cover of book with info/details?
import { connect } from 'react-redux';

const BookInfo = props => {
    if (!props.show) {
        return null
    } else {
    return(
        <div className='bookmodal'>
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

export default connect(mapStateToProps)(BookInfo);