import { createAction } from "@reduxjs/toolkit";
import { CreateAccountDTO } from "../CreateAccount/models/CreateAccountDTO";

export const GetToken = createAction('GET_TOKEN', (email: string, password: string) => ({
    payload: { email, password }
}));

export const CreateAccount = createAction('RETRY_CONNECTION', (dto: CreateAccountDTO) => ({
    payload: { dto }
}));
