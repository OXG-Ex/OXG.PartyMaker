import { all } from 'redux-saga/effects';
import loginPageSagas from '../components/login/saga/LoginPageSagas';

export default function* rootSaga(): Generator {
    yield all([
        ...loginPageSagas
    ]);
}
