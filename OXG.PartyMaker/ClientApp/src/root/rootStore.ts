import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

type StoreType = {
    store: Store;
};

export const initializeStore = (): StoreType => {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = (getDefaultMiddleware) => getDefaultMiddleware(
        {
            thunk: false,
            serializableCheck: false
        })
        .concat(sagaMiddleware);

    const store = configureStore({
        reducer: rootReducer,
        middleware: middleware
    });

    sagaMiddleware.run(rootSaga); //Enable sagas

    return { store: store };
};

const rootStore = initializeStore();

export default rootStore;
