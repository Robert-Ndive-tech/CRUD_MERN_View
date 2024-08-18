import { createStore } from 'redux';


const initialState = {
    globalString: ''
};

const SET_STRING = 'SET_STRING';

const setString = (newString) => {
    return {
        type: SET_STRING,
        payload: newString
    };
};

const stringReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STRING:
            return {
                ...state,
                globalString: action.payload
            };
        default:
            return state;
    }
};



const store = createStore(stringReducer);

export default store;
