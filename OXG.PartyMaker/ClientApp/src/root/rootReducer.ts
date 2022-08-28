import { combineReducers } from "redux";

import authReducer, { initialState as authReducerInitialState } from "../components/auth/AuthReducer";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initialStateFunc = () => {
    return {
        auth: authReducerInitialState
    };
};

export const initialState = initialStateFunc();

export type RootStoreType = typeof initialState;

export const rootReducer = combineReducers({
    auth: authReducer
});
