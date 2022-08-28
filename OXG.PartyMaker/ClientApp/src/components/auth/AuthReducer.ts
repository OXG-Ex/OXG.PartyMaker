import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootStoreType } from "../../root/rootReducer";

export const initialState: AuthState = {
    token: "",
    userName: ""
};

export type AuthState = {
    token: string;
    userName: string;
};

const authSlice = createSlice({
    name: "authReducer",
    initialState,
    reducers: {
        setAuthToken: (state, action: PayloadAction<string>) => { state.token = action.payload; },
        setUserName: (state, action: PayloadAction<string>) => { state.userName = action.payload; }
    },
});

export const getAuthToken = (store: RootStoreType): string => store.auth.token;
export const getUserName = (store: RootStoreType): string => store.auth.userName;

export const {
    setAuthToken,
    setUserName,
} = authSlice.actions;

export default authSlice.reducer;
