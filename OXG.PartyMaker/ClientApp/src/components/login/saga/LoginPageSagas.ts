import axios, { AxiosResponse } from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { TokenResponse } from "../../../models/TokenResponse";
import { restClientInstance } from "../../../services/serviceModules";
import { setAuthToken, setUserName } from "../../auth/AuthReducer";
import { ResponseCode } from "../../common/ResponseCode";
import * as AuthActions from "../../auth/AuthActions";
import { PayloadAction } from "@reduxjs/toolkit";

const loginPageSagas = [
    takeLatest(AuthActions.GetToken, workerAuthorize)
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

export default loginPageSagas;
