import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getAuthToken } from "../auth/AuthReducer";
import { CreateAccountPage } from "../CreateAccount/CreateAccountPage";
import { NotFoundPage } from "../errors/NotFoundPage";
import { LoginPage } from "../login/LoginPage";

import RouterPaths from "./RoutePath";

export const MainRouter: React.FC = () => {
    const isAuthorized = useSelector(getAuthToken);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthorized) {
            navigate(RouterPaths.Login);
        }
    }, [history, isAuthorized]);

    return (
        <Fragment>
            <Routes>
                <Route path={RouterPaths.Login} element={<LoginPage />} />
                <Route path={RouterPaths.CreateAccount} element={<CreateAccountPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Fragment>
    );
};
