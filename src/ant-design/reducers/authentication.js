import update from 'immutability-helper';

import * as AuthenticationTypes from '../actions/authentication/AuthenticationTypes';

const initialState = {
    statusMessage: 'NONE',
    isLoggedIn: false,
    username: '',
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case AuthenticationTypes.LOGIN_REQUEST:
            return update(state, {
                $set: {
                    statusMessage: 'REQUEST',
                    isLoggedIn: false,
                    username: '',
                },
            });
        case AuthenticationTypes.LOGIN_SUCCESS:
            return update(state, {
                $set: {
                    statusMessage: 'SUCCESS',
                    isLoggedIn: true,
                    username: action.payload,
                },
            });
        case AuthenticationTypes.LOGIN_FAILURE:
            return update(state, {
                $set: {
                    statusMessage: 'FAILURE',
                    isLoggedIn: false,
                    username: '',
                },
            });
        default:
            return state;
    }
}
