import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../errors/NotFoundPage";
import { LoginPage } from "../login/LoginPage";

import RouterPaths from "./RoutePath";

export const MainRouter: React.FC = () => {
    return (
        <Fragment>
            <Routes>
                <Route path={RouterPaths.Login} element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            {/* <Route path={RouterPaths.NewTrack} component={NewTrack} />
            <Route path={RouterPaths.AddTime} component={TimeDialog} /> */}
        </Fragment>
    );
};
