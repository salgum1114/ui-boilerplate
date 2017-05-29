import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_GET_STATUS,
    AUTH_GET_STATUS_SUCCESS,
    AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT
    
} from './ActionTypes';

import axios from 'axios';

/*============================================================================
    authentication
==============================================================================*/

/* LOGIN */
export function loginRequest(username, password) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());

        // API REQUEST
        return axios.post('http://localhost:8080/api/auth/login', { username: username, password: password }, {
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        // return axios.post('/api/account/signin', { username, password })
        .then((response) => {
            // SUCCEED
            console.log('refreshToken');
            console.log('token');
            console.log(response);
            dispatch(loginSuccess(username, response));
        }).catch((error) => {
            // FAILED
            dispatch(loginFailure());
        });
    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(username, response) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        username,
        response
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

/* REGISTER */
export function registerRequest(username, password) {
    return (dispatch) => {
        // Inform Register API is starting
        dispatch(register());

        return axios.post('/api/account/signup', { username, password })
        .then((response) => {
            dispatch(registerSuccess());
        }).catch((error) => {
            dispatch(registerFailure(error.response.data.code));
        });
    };
}

export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess() {
    return {
        type: AUTH_REGISTER_SUCCESS,
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };
}

/* GET STATUS */
export function getStatusRequest() {
    return (dispatch) => {
        dispatch(getStatus());

        return axios.get('/api/account/getInfo')
        .then((response) => {
            dispatch(getStatusSuccess(response.data.info.username));
        }).catch((error) => {
            dispatch(getStatusFailure());
        })
    }
}

export function getStatus() {
    return {
        type: AUTH_GET_STATUS
    };
}

export function getStatusSuccess(username) {
    return {
        type: AUTH_GET_STATUS_SUCCESS,
        username
    };
}

export function getStatusFailure() {
    return {
        type: AUTH_GET_STATUS_FAILURE
    };
}

export function logoutRequest() {
    return (dispatch) => {
        return axios.post('http://localhost:8080/api/auth/logout')
        .then((response) => {
            console.log(response);
            dispatch(logout());
        });
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    }
}