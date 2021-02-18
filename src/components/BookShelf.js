//Component displaying selection of shelved books with spines visible
import { connect } from 'react-redux';
import { viewBook } from './../actions';

const Bookshelf = props => {

    const handleClick = e => {
        props.viewBook(e.target.id);
    }

    const bookColors = ['blue', 'red', 'yellow', 'green'];

    return(
        <div className='bookshelf'>
            {props.books.map((book, index) => <div onClick={handleClick} key={book.key} id={book.key} className={`bookspine ${bookColors[index % 4]}`}>{book.title}</div>)}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, { viewBook })(Bookshelf);