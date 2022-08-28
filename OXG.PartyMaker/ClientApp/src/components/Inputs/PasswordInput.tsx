import { Visibility, VisibilityOff } from "@mui/icons-material";
import { OutlinedInput, InputAdornment, IconButton, TextField } from "@mui/material";
import useId from "@mui/material/utils/useId";
import React, { ChangeEvent, useCallback, useState } from "react";

export type PasswordInputProps = {
    onChangeCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    label?: string;
};

export const PasswordInput: React.FC<PasswordInputProps> = (props: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = useCallback(() => {
        setShowPassword(!showPassword);
    }, [showPassword]);

    const id = useId();

    return <TextField
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={props.defaultValue || ""}
        onChange={props.onChangeCallback}
        InputProps={{
            endAdornment: (<InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
            ),
        }}
        label={props.label}
    />;
};
