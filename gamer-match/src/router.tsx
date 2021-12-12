import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Landing />} path="/" />
                <Route element={<SignUp />} path="/register" />
                <Route element={<SignIn />} path="/login" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;