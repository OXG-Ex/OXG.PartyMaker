import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmailField } from "../Inputs/EmailField";

import { PasswordField } from "../Inputs/PasswordField";
import { GetToken } from "./state/LoginPageActions";
import { getUserEmail, getUserPassword, setUserEmail, setUserPassword } from "./state/LoginPageReducer";


export const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const userPassword = useSelector(getUserPassword);
    const userEmail = useSelector(getUserEmail);

    const handleChangePassword = useCallback((e) => {
        dispatch(setUserPassword(e.target.value));
    }, [dispatch]);

    const handleChangeEmail = useCallback((e) => {
        dispatch(setUserEmail(e.target.value));
    }, [dispatch]);

    const handleSubmitClick = useCallback((e) => {
        dispatch(GetToken());
    }, [dispatch]);


    return <div>
        <Stack direction={"column"}>
            <EmailField onChangeCallback={handleChangeEmail} defaultValue={userEmail} />
            <PasswordField onChangeCallback={handleChangePassword} defaultValue={userPassword} />
            <Button variant="outlined" onClick={handleSubmitClick}>Submit</Button>
        </Stack>
    </div>;
};
