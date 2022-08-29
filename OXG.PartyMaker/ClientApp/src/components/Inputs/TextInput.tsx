import { TextField } from "@mui/material";
import useId from "@mui/material/utils/useId";
import React, { ChangeEvent, useCallback, useState } from "react";

export type TextInputProps = {
    onChangeCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    type?: string;
    label?: string;
};

export const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
    const id = useId();

    return <TextField
        id={id}
        type={props.type || 'text'}
        defaultValue={props.defaultValue || ""}
        onChange={props.onChangeCallback}
        label={props.label}
        variant="outlined"
    />;
};
