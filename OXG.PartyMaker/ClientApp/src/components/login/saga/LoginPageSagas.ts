import axios, { AxiosResponse } from "axios";
import { call, select, takeLatest } from "redux-saga/effects";
import { restClientInstance } from "../../../services/serviceModules";
import * as loginPageActions from "../state/LoginPageActions";
import { getUserEmail, getUserPassword } from "../state/LoginPageReducer";

const loginPageSagas = [
    takeLatest(loginPageActions.GetToken, workerAuthorize)
];


export function* workerAuthorize(): Generator {
    try {
        const userEmail = yield select(getUserEmail);
        const userPassword = yield select(getUserPassword);
        const result = (yield call([restClientInstance, restClientInstance.Post], "api/account/getToken", { userEmail: userEmail, userPassword: userPassword })) as AxiosResponse;
        console.log(result.status);
        console.log(result.data);
    }
    catch (error) {
        //error handling
    }
}


export default loginPageSagas;
