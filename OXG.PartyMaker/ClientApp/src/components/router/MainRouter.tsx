import React, { Fragment, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { SignUpPage } from "../SignUp/SignUpPage";
import { NotFoundPage } from "../errors/NotFoundPage";
import { SignInPage } from "../SignIn/SignInPage";
import RouterPaths from "./RoutePath";
import { HistoryInitializer } from "./History/HistoryInitializer";

export const MainRouter: React.FC = () => {
    useNavigate();
    return (
        <Fragment>
            <HistoryInitializer />
            <Routes>
                <Route path={RouterPaths.SignIn} element={<SignInPage />} />
                <Route path={RouterPaths.SignUp} element={<SignUpPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Fragment>
    );
};
