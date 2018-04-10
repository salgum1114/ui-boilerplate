import * as CounterTypes from './CounterTypes';

const incrementalAction = () => {
    return {
        type: CounterTypes.INCREMENTAL,
    };
};

const decrementalAction = () => {
    return {
        type: CounterTypes.DECREMENTAL,
    };
};

const incremental = () => (dispatch) => {
    dispatch(incrementalAction());
};

const decremental = () => (dispatch) => {
    dispatch(decrementalAction());
};

export {
    incremental,
    decremental,
};
