import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import LoginPage from "./components/templates/LoginPage/LoginPage";
import SignUpPage from "./components/templates/SignUpPage/SignUpPage";
import DashboardPage from "./components/templates/DashboardPage/DashboardPage";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="signup" element={<SignUpPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
