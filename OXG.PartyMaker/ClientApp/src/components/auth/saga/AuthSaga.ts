import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

import { TokenResponse } from "../../../models/TokenResponse";
import { restClientInstance } from "../../../services/serviceModules";
import { ResponseCode } from "../../common/ResponseCode";
import { setAuthToken, setUserName } from "../AuthReducer";
import * as AuthActions from "../AuthActions";
import { CreateAccountDTO } from "../../CreateAccount/models/CreateAccountDTO";


const authSagas = [
    takeLatest(AuthActions.GetToken, workerAuthorize),
    takeLatest(AuthActions.CreateAccount, workerCreateAccount)
];


export function* workerAuthorize(actionPayload: PayloadAction<{ email: string, password: string; }>): Generator {
    try {
        const { email, password } = actionPayload.payload;
        const result = (yield call([restClientInstance, restClientInstance.Post], "api/account/getToken", { userEmail: email, userPassword: password })) as AxiosResponse<TokenResponse>;
        if (result.status === ResponseCode.Success) {
            yield put(setAuthToken(result.data.access_token));
            yield put(setUserName(result.data.username));
        }
    }
    catch (error) {
        //error handling
    }
}

export function* workerCreateAccount(actionPayload: PayloadAction<{ dto: CreateAccountDTO; }>): Generator {
    try {
        // const { email, password } = actionPayload.payload;
        // const result = (yield call([restClientInstance, restClientInstance.Post], "api/account/getToken", { userEmail: email, userPassword: password })) as AxiosResponse<TokenResponse>;
        // if (result.status === ResponseCode.Success) {
        //     yield put(setAuthToken(result.data.access_token));
        //     yield put(setUserName(result.data.username));
        // }
    }
    catch (error) {
        //error handling
    }
}

export default authSagas;
