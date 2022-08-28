import { Visibility, VisibilityOff } from "@mui/icons-material";
import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import React, { ChangeEvent, useCallback, useState } from "react";

export type PasswordFieldProps = {
    onChangeCallback: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    defaultValue?: string;
};

export const PasswordField: React.FC<PasswordFieldProps> = (props: PasswordFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = useCallback(() => {
        setShowPassword(!showPassword);
    }, [showPassword]);

    return <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={props.defaultValue || ""}
        onChange={props.onChangeCallback}
        endAdornment={
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        }
        label="Password"
    />;
};
