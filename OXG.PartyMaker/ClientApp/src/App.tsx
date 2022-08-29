import { createBrowserHistory } from 'history';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MainRouter } from './components/router/MainRouter';


export default () => (
    <BrowserRouter >
        <MainRouter />
    </BrowserRouter>
);
