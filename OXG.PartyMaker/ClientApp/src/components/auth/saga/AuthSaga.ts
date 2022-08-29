import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

import { TokenResponse } from "../../../models/TokenResponse";
import { restClientInstance } from "../../../services/serviceModules";
import { ResponseCode } from "../../common/ResponseCode";
import { setAuthToken, setUserName } from "../AuthReducer";
import * as AuthActions from "../AuthActions";
import { SignUpDTO } from "../../SignUp/models/SignUpDTO";
import RouterPaths from "../../router/RoutePath";
import { History } from "../../router/History/History";


const authSagas = [
    takeLatest(AuthActions.GetToken, workerAuthorize),
    takeLatest(AuthActions.SignUp, workerSignUp),
    takeLatest(AuthActions.SetAuthData, setAuthData)
];

export function* workerAuthorize(actionPayload: PayloadAction<{ email: string, password: string; }>): Generator {
    try {
        const { email, password } = actionPayload.payload;
        const result = (yield call([restClientInstance, restClientInstance.Post], "api/account/getToken", { userEmail: email, userPassword: password })) as AxiosResponse<TokenResponse>;
        if (result.status === ResponseCode.Success) {
            yield call(AuthActions.SetAuthData, result.data.access_token, result.data.username);
        } else {
            alert(result);
        }
    }
    catch (error) {
        //error handling
    }
}

export function* workerSignUp(actionPayload: PayloadAction<{ dto: SignUpDTO; }>): Generator {
    const payload = actionPayload.payload.dto;
    try {
        const result = (yield call([restClientInstance, restClientInstance.Post], "api/account/SignUp", payload)) as AxiosResponse<TokenResponse>;
        if (result.status === ResponseCode.Success) {
            yield call(AuthActions.SetAuthData, result.data.access_token, result.data.username);
        }
        else {
            alert(result);
        }
    }
    catch (error) {
        //error handling
    }
}

export function* setAuthData(actionPayload: PayloadAction<{ access_token: string, userName: string; }>): Generator {
    const payload = actionPayload.payload;
    try {
        yield put(setAuthToken(payload.access_token));
        yield put(setUserName(payload.userName));
        yield call(History.push(RouterPaths.Root));
    }
    catch (error) {
        //error handling
    }
}

export default authSagas;
