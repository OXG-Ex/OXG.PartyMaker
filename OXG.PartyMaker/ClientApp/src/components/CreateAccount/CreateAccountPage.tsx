import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CreateAccountDTO } from "./models/CreateAccountDTO";
import { PasswordInput } from "../Inputs/PasswordInput";
import { TextInput } from "../Inputs/TextInput";
import { CreateAccount } from "../auth/AuthActions";

export const CreateAccountPage: React.FC = () => {
    const dispatch = useDispatch();

    const [values, setValues] = React.useState<CreateAccountDTO>({
        userName: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = useCallback((prop: keyof CreateAccountDTO) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    }, [values]);

    const handleSubmitClick = useCallback(() => dispatch(CreateAccount(values)), [dispatch, values]);

    return <div>
        <Stack direction={"column"}>
            <TextInput onChangeCallback={handleChange("userName")} type="Text" label="User name" />
            <PasswordInput onChangeCallback={handleChange("password")} />
            <PasswordInput onChangeCallback={handleChange("confirmPassword")} />
            <Button variant="outlined" onClick={handleSubmitClick}>Submit</Button>
        </Stack>
    </div>;
};
