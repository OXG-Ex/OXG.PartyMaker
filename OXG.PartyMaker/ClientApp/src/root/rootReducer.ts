import { combineReducers } from "redux";

import loginPageReducer, { initialState as loginPageReducerInitialState } from "../components/login/state/LoginPageReducer";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initialStateFunc = () => {
    return {
        loginPage: loginPageReducerInitialState
    };
};

export const initialState = initialStateFunc();

export type RootStoreType = typeof initialState;

export const rootReducer = combineReducers({
    loginPage: loginPageReducer
});
