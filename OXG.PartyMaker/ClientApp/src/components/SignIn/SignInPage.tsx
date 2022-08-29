import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "../Inputs/TextInput";

import { PasswordInput } from "../Inputs/PasswordInput";
import { GetToken } from "../auth/AuthActions";


export const SignInPage: React.FC = () => {
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }, [dispatch, userEmail, setUserEmail]);

    const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.target.value);
    }, [dispatch, userPassword, setUserPassword]);

    const handleSubmitClick = useCallback(() => {
        dispatch(GetToken(userEmail, userPassword));
    }, [dispatch, userEmail, userPassword]);


    return <div>
        <Stack direction={"column"}>
            <TextInput onChangeCallback={handleChangeEmail} type="Email" label="Email" />
            <PasswordInput onChangeCallback={handleChangePassword} label="Password" />
            <Button variant="outlined" onClick={handleSubmitClick}>Submit</Button>
        </Stack>
    </div>;
};
