import update from 'immutability-helper';
import * as CounterTypes from '../actions/counter/CounterTypes';

const initialState = {
    count: 0,
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case CounterTypes.INCREMENTAL:
            return update(state, {
                count: {
                    $set: state.count + 1,
                },
            });
        case CounterTypes.DECREMENTAL:
            return update(state, {
                count: {
                    $set: state.count - 1,
                },
            });
        default:
            return state;
    }
}
