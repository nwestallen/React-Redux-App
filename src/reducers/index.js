import { CLOSE_BOOK_INFO, FETCH_BOOK_FAIL, FETCH_BOOK_LOAD, FETCH_BOOK_SUCCESS } from './../actions';

const initialState = {
    books: [
        {title: 'Gödel, Escher, Bach', key: 'OL4731539M'}, 
        {title: 'Structure and Interpretation of Computer Programs', key: 'OL15495574M'},
        {title: 'The Lifebox, The Seashell, and The Soul', key: 'OL8615415M'},
        {title: 'How to Solve It', key: 'OL7757839M'},
        {title: 'Fake Book', key: 'badkey'},
        {title: 'Eloquent Javascript', key: 'OL26832992M'}
    ],
    isLoading: false,
    showInfo: false,
    loadedBook: {title: '', subtitle:'', coverLink: ''},
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOK_LOAD:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_BOOK_SUCCESS:
            return {
                ...state,
                loadedBook: {title: action.payload.title, subtitle: action.payload.subtitle, coverLink: action.payload.cover.medium },
                isLoading: false,
                showInfo: true
            };
        case FETCH_BOOK_FAIL:
            return {
                ...state,
                showInfo: true,
                isLoading: false,
                error: action.payload
            };
        case CLOSE_BOOK_INFO:
            return {
                ...state,
                showInfo: false,
                loadedBook: {title: '', subtitle: '', coverLink: ''}
            };
        default:
            return state;
    };
};

export default reducer;