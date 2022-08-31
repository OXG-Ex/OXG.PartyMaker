import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootStore from './root/rootStore';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.render(
    <Provider store={rootStore.store}>
        <CssBaseline enableColorScheme />
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
