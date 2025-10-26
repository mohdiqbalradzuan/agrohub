import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "@components/NavBar";
import MainPage from "@pages/MainPage";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Map from "@pages/Map";

import usersData from "./data/users.json";

function App() {
    const [users, setUsers] = useState(usersData);
    const [loggedInUser, setLoggedInUser] = useState(null);

    return (
        // <>
        //     <div className="pp">
        //         <MainPage />
        //     </div>
        // </>
        <div className="app">
            <Router>
                <NavBar
                    user={loggedInUser}
                    onLogout={() => setLoggedInUser(null)}
                />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/agrohub" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/map" element={<Map users={users} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
