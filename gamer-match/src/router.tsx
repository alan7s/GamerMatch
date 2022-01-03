import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Match from './pages/Match';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Landing />} path="/" />
                <Route element={<SignUp />} path="/register" />
                <Route element={<SignIn />} path="/login" />
                <Route element={<Match />} path="/match" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;