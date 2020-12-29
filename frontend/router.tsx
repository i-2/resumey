import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import { ThemeProvider, defaultTheme } from 'evergreen-ui';

const Routers = () => (
    <Provider store={store}>
        <HashRouter>
            <ThemeProvider value={{ ...defaultTheme, spinnerColor: 'blue' }}>
                <App />
            </ThemeProvider>
        </HashRouter>
    </Provider>
);


export default Routers;
