import { FETCH_BOOK_FAIL, FETCH_BOOK_LOAD, FETCH_BOOK_SUCCESS } from './../reducers';

const initialState = {
    books: [
        {title: 'Gödel, Escher, Bach', key: 'OL4731539M'}, 
        {title: 'Structure and Interpretation of Computer Programs', key: 'OL15495574M'},
        {title: 'The Lifebox, The Seashell, and The Soul', key: 'OL8615415M'},
        {title: 'How to Solve It', key: 'OL7757839M'}
    ],
    isLoading: false,
    showInfo: false,
    loadedBook: {title: '', author: '', coverLink: '', isbn: ''},
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;