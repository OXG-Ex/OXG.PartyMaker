import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InputGroup } from "reactstrap";

import { RootStoreType } from "../../../root/rootReducer";

export const initialState: LoginPageState = {
    userEmail: "",
    userPassword: "",
    errorMessage: ""
};

export type LoginPageState = {
    userEmail: string;
    userPassword: string;
    errorMessage: string;
};

const loginPageSlice = createSlice({
    name: "loginPageReducer",
    initialState,
    reducers: {
        setUserEmail: (state, action: PayloadAction<string>) => { state.userEmail = action.payload; },
        setUserPassword: (state, action: PayloadAction<string>) => { state.userPassword = action.payload; },
        setErrorMessage: (state, action: PayloadAction<string>) => { state.errorMessage = action.payload; },
    },
});

export const getUserEmail = (store: RootStoreType): string => store.loginPage.userEmail;
export const getUserPassword = (store: RootStoreType): string => store.loginPage.userPassword;
export const getLoginErrorMessage = (store: RootStoreType): string => store.loginPage.errorMessage;

export const {
    setUserEmail,
    setUserPassword,
    setErrorMessage,
} = loginPageSlice.actions;

export default loginPageSlice.reducer;
