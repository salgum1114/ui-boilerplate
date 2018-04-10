import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';

import '../../less/ant-design/index.less';
import App from './containers/App';
import AppModule from './AppModule';

injectTapEventPlugin();

const appModule = new AppModule();
appModule.dashboardWidgets();
appModule.resourceDetails();
appModule.resourceSummaryDetails();
appModule.reducers();

const modules = EXTERNAL_MODULES.map(MODULE => {
    const waitForChunk = require('bundle-loader?lazy!./modules/' + MODULE + '/Module.js');
    return new Promise((resolve, reject) => waitForChunk((file) => {
        resolve(file.default);
    }));
});

Promise.all(modules).then(res => {
    res.forEach((m) => {
        const subModule = new m(appModule.configurations);
        subModule.dashboardWidgets();
        subModule.resourceDetails();
        subModule.resourceSummaryDetails();
        subModule.reducers();
    });
});

console.log(appModule);

const rootElement = document.getElementById('root');
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store(appModule.configurations)}>
                <Component />
            </Provider>
        </AppContainer>
        , rootElement,
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        store.replaceReducer(appModule.configurations.reducers);
        render(App);
    });
}
