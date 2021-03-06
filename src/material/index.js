import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../../less/material/index.less';
import App from './containers/App';

injectTapEventPlugin();

const rootElement = document.getElementById('root');
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <MuiThemeProvider>
                <Component />
            </MuiThemeProvider>
        </AppContainer>
        , rootElement,
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App);
    });
}
