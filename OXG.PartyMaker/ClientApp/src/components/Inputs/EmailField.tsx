import { Visibility, VisibilityOff } from "@mui/icons-material";
import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import React, { ChangeEvent, useCallback, useState } from "react";

export type EmailFieldProps = {
    onChangeCallback: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    defaultValue?: string;
};

export const EmailField: React.FC<EmailFieldProps> = (props: EmailFieldProps) => {

    return <OutlinedInput
        id="outlined-adornment-email"
        type={'email'}
        value={props.defaultValue || ""}
        onChange={props.onChangeCallback}
        label="Email"
    />;
};
