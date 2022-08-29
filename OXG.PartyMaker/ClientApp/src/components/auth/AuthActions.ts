import { createAction } from "@reduxjs/toolkit";
import { SignUpDTO } from "../SignUp/models/SignUpDTO";

export const GetToken = createAction('GET_TOKEN', (email: string, password: string) => ({
    payload: { email, password }
}));

export const SignUp = createAction('RETRY_CONNECTION', (dto: SignUpDTO) => ({
    payload: { dto }
}));

export const SetAuthData = createAction('SET_AUTH_DATA', (access_token: string, userName: string) => ({
    payload: { access_token, userName }
}));
