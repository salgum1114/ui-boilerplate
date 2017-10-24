import * as AuthenticationTypes from './AuthenticationTypes';

const loginRequest = () => {
    return {
        type: AuthenticationTypes.API_LOGIN_REQUEST,
    };
};

const loginSuccess = (username, password) => {
    return {
        type: AuthenticationTypes.API_LOGIN_SUCCESS,
        payload: {
            username,
            password,
        },
    };
};

const loginFailure = () => {
    return {
        type: AuthenticationTypes.API_LOGIN_FAILURE,
    };
};

const login = (username, password) => (dispatch) => {
    dispatch(loginRequest());
    dispatch(loginSuccess(username, password));
    dispatch(loginFailure());
};

export {
    login,
};
