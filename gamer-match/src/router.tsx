import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import Recovery from './pages/Recovery';
import EmailCode from './pages/Recovery/EmailCode';
import NewPassword from './pages/Recovery/NewPassword';
import Match from './pages/Match';
import Chat from './pages/Chat';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Landing />} path="/" />
                <Route element={<SignUp />} path="/register" />
                <Route element={<Recovery />} path="/recovery" />
                <Route element={<EmailCode />} path="/recovery/emailCode" />
                <Route element={<NewPassword />} path="/recovery/newPassword" />
                <Route element={<Match />} path="/match" />
                <Route element={<Chat />} path="/chat" />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
