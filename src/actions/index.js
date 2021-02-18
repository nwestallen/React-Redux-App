import axios from 'axios';

export const FETCH_BOOK_LOAD = "FETCH_BOOK_LOAD";
export const FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS";
export const FETCH_BOOK_FAIL = "FETCH_BOOK_FAIL";
export const CLOSE_BOOK_INFO = "CLOSE_BOOK_INFO";
export const REMOVE_BOOK = "REMOVE_BOOK";

export const fetchBookLoad = () => {return({type: FETCH_BOOK_LOAD})};
export const fetchBookSuccess = result => {return({type: FETCH_BOOK_SUCCESS, payload: result})};
export const fetchBookFail = key => {return({type: FETCH_BOOK_FAIL, payload: key})};
export const closeBookInfo = () => {return({type: CLOSE_BOOK_INFO})};
export const removeBook = () => {return({type: REMOVE_BOOK})};

export const viewBook = key => dispatch => {
    dispatch(fetchBookLoad());

    axios
    .get(`https://openlibrary.org/api/books?bibkeys=OLID:${key}&jscmd=data&format=json`)
    .then(res => {
        dispatch(fetchBookSuccess(res.data[`OLID:${key}`]))
    })
    .catch(err => dispatch(fetchBookFail(key)));
};