import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PasswordInput } from "../Inputs/PasswordInput";
import { TextInput } from "../Inputs/TextInput";
import { SignUp } from "../auth/AuthActions";
import { SignUpDTO } from "./models/SignUpDTO";

export const SignUpPage: React.FC = () => {
    const dispatch = useDispatch();

    const [values, setValues] = React.useState<SignUpDTO>({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = useCallback((prop: keyof SignUpDTO) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    }, [values]);

    const handleSubmitClick = useCallback(() => dispatch(SignUp(values)), [dispatch, values]);

    return <div>
        <Stack direction={"column"}>
            <TextInput onChangeCallback={handleChange("email")} type="Email" label="Email" />
            <TextInput onChangeCallback={handleChange("userName")} type="Text" label="Name" />
            <PasswordInput onChangeCallback={handleChange("password")} label="Password" />
            <PasswordInput onChangeCallback={handleChange("confirmPassword")} label="Confirm password" />
            <Button variant="outlined" onClick={handleSubmitClick}>Submit</Button>
        </Stack>
    </div>;
};
