import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import { ChakraProvider } from '@chakra-ui/react';

const Routers = () => (
    <Provider store={store}>
        <HashRouter>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </HashRouter>
    </Provider>
);


export default Routers;
