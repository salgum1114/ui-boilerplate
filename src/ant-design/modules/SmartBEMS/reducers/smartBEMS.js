import update from 'immutability-helper';
import * as SmartBEMSTypes from '../actions/smartbems/SmartBEMSTypes';

const initialState = {
    count: 0,
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case SmartBEMSTypes.INCREMENTAL:
            return update(state, {
                count: {
                    $set: state.count + 1,
                },
            });
        case SmartBEMSTypes.DECREMENTAL:
            return update(state, {
                count: {
                    $set: state.count - 1,
                },
            });
        default:
            return state;
    }
}
