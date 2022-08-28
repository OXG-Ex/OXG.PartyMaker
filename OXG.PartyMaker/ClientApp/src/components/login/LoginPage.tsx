import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "../Inputs/TextInput";

import { PasswordInput } from "../Inputs/PasswordInput";
import { GetToken } from "../auth/AuthActions";


export const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleChangeEmail = useCallback((e) => {
        setUserEmail(e.target.value);
    }, [dispatch]);

    const handleChangePassword = useCallback((e) => {
        setUserPassword(e.target.value);
    }, [dispatch]);

    const handleSubmitClick = useCallback((e) => {
        dispatch(GetToken(userEmail, userPassword));
    }, [dispatch]);


    return <div>
        <Stack direction={"column"}>
            <TextInput onChangeCallback={handleChangeEmail} type="Email" label="Email" />
            <PasswordInput onChangeCallback={handleChangePassword} />
            <Button variant="outlined" onClick={handleSubmitClick}>Submit</Button>
        </Stack>
    </div>;
};
