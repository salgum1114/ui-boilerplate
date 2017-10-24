import update from 'immutability-helper';

import * as AuthenticationTypes from '../actions/authentication/AuthenticationTypes';
import { TYPES, COMMAND, updateReducer } from '../actions/actionHelper';

const initialState = {
    statusMessage: 'INIT',
    errorMessage: 'NONE',
    isLoggedIn: false,
    username: '',
    password: '',
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case AuthenticationTypes.API_LOGIN_REQUEST:
            return update(state, {
                statusMessage: {
                    $set: 'REQUEST',
                },
                isLoggedIn: {
                    $set: false,
                },
            });
        case AuthenticationTypes.API_LOGIN_SUCCESS:
            return update(state, {
                statusMessage: {
                    $set: 'SUCCESS',
                },
                isLoggedIn: {
                    $set: true,
                },
                username: {
                    $set: action.payload.username,
                },
                password: {
                    $set: action.payload.password,
                },
            });
        case AuthenticationTypes.API_LOGIN_FAILURE:
            return update(state, {
                statusMessage: {
                    $set: 'FAILURE',
                },
                erorrMessage: {
                    $set: 'ERROR',
                },
                isLoggedIn: {
                    $set: false,
                },
                username: {
                    $set: '',
                },
                password: {
                    $set: '',
                },
            });
        default:
            return state;
    }
}
