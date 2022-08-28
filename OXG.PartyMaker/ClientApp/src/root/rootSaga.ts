import { all } from 'redux-saga/effects';
import authSagas from '../components/auth/saga/AuthSaga';

export default function* rootSaga(): Generator {
    yield all([
        ...authSagas
    ]);
}
