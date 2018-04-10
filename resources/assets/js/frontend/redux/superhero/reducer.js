import * as types from './types';

const initialState = {
    loading: false,
    superheroes: []
};

export default function superheroReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOADING_SUPERHEROES:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_SUPERHERO_SUCCESS:
            return {
                ...state,
                superheroes: action.superheroes,
                loading: false
            }
        default:
            return state;
    }
}