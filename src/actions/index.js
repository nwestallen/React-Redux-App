import axios from 'axios';

export const FETCH_BOOK_LOAD = "FETCH_BOOK_LOAD";
export const FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS";
export const FETCH_BOOK_FAIL = "FETCH_BOOK_FAIL";

export const fetchBookLoad = () => {return({type: FETCH_BOOK_LOAD})};
export const fetchBookSuccess = result => {return({type: FETCH_BOOK_SUCCESS, payload: result})};
export const fetchBookFail = error => {return({type: FETCH_BOOK_FAIL, payload: error})};

export const viewBook = key => dispatch => {
    dispatch(fetchBookLoad());

    axios
    .get(`http://openlibrary.org/api/volumes/brief/olid/${key}.json`)
    .then(res => dispatch(fetchBookSuccess(res.data)))
    .catch(err => dispatch(fetchBookFail(err)));
};