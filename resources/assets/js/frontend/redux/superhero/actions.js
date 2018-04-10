import * as types from './types';
import superheroApi from '../../api/superhero';

function loadingSuperheroes(){
    return {
        type: types.LOADING_SUPERHEROES
    }
}

function loadSuperheroesSuccess(superheroes) {
    return {
        type: types.LOAD_SUPERHERO_SUCCESS,
        superheroes
    };
}

export function getAllSuperheroes() {
    return function (dispatch) {
        dispatch(loadingSuperheroes());
        return superheroApi.getAllSuperHeroes().then(superheroes => {
            dispatch(loadSuperheroesSuccess(superheroes));
        });
    };
}