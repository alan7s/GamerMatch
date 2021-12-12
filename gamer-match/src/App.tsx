import React from 'react';
import './styles/global.css'
import Router from "./router";
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Recovery from './pages/SignIn/Recovery';

function App() {
  return (
    <Router/>
  );
}

export default App;