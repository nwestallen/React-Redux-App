//Component displaying selection of shelved books with spines visible
import './../App.css';
import { connect } from 'react-redux';

const Bookshelf = props => {

    const handleClick = e => {
        console.log(e.target)
    }

    const bookColors = ['blue', 'red', 'yellow', 'green'];

    return(
        <div className='bookshelf'>
            {props.books.map((book, index) => <div onClick={handleClick} key={index} className={`bookspine ${bookColors[index % 4]}`}>{book.title}</div>)}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(Bookshelf);