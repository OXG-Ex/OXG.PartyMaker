import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MainRouter } from './components/router/MainRouter';

import './App.scss';

export default () => (
    <BrowserRouter >
        <MainRouter />
    </BrowserRouter>
);
