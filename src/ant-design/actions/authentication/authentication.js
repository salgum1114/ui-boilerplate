import * as AuthenticationTypes from './AuthenticationTypes';

const loginRequest = () => {
    return {
        type: AuthenticationTypes.LOGIN_REQUEST,
    };
};

const loginSuccess = (username) => {
    return {
        type: AuthenticationTypes.LOGIN_SUCCESS,
        payload: username,
    };
};

const loginFailure = () => {
    return {
        type: AuthenticationTypes.LOGIN_FAILURE,
    };
};

const login = ({ username, password }) => (dispatch) => {
    dispatch(loginRequest());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'admin' && password === 'admin') {
                resolve(dispatch(loginSuccess(username)));
            } else {
                reject(dispatch(loginFailure()));
            }
        }, 500);
    });
};

export {
    login,
};
