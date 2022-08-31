import { Box, Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { TextInput } from "../Inputs/TextInput";
import { PasswordInput } from "../Inputs/PasswordInput";
import { GetToken } from "../auth/AuthActions";

import "./SignInPage.scss";

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


    return <Box className="sign-in-container">
        <Stack direction={"column"} className="inputs-stack">
            <TextInput onChangeCallback={handleChangeEmail} type="Email" label="Email" />
            <PasswordInput onChangeCallback={handleChangePassword} label="Password" />
            <Button variant="outlined" onClick={handleSubmitClick}>Submit</Button>
        </Stack>
    </Box>;
};
