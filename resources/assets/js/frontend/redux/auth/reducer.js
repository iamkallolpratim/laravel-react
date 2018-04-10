import * as types from './types';
import Http from '../../Http';

const user = {
    id: null,
    name: null,
    email: null,
    createdAt: null,
    updatedAt: null
};

const initialState = {
    isAuthenticated: false,
    user
};

const Auth = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case types.AUTH_LOGIN:
            return authLogin(state, payload);
        case types.AUTH_CHECK:
            return checkAuth(state);
        case types.AUTH_LOGOUT:
            return logout(state);
        default:
            return state;
    }
};

const authLogin = (state, payload) => {
    const jwtToken = payload.token;
    const user = payload.user[0];
    localStorage.setItem('jwt_token', jwtToken);
    Http.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    state = Object.assign({}, state, {
        isAuthenticated: true,
        user
    });
    return state;

};

const checkAuth = (state) => {
    state = Object.assign({}, state, {
        isAuthenticated: !!localStorage.getItem('jwt_token'),
    });
    if (state.isAuthenticated) {
        Http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`;
    }
    return state;
};

const logout = (state) => {
    localStorage.removeItem('jwt_token');
    state = Object.assign({}, state, {
        isAuthenticated: false,
        user
    });
    return state;
};

export default Auth;