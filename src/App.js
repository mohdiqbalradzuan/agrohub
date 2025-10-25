import "./App.css";
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";

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
                </Routes>
            </Router>
        </div>
    );
}

export default App;
