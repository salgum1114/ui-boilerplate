import * as SmartBEMSTypes from './SmartBEMSTypes';

const incrementalAction = () => {
    return {
        type: SmartBEMSTypes.INCREMENTAL,
    };
};

const decrementalAction = () => {
    return {
        type: SmartBEMSTypes.DECREMENTAL,
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
