import * as types from './types';

export function authLogin(payload) {
    return {
        type: types.AUTH_LOGIN,
        payload
    }
}

export function authLogout() {
    return {
        type: types.AUTH_LOGOUT
    }
}

export function authCheck() {
    return {
        type: types.AUTH_CHECK
    }
}