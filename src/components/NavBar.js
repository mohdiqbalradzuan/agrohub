import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function NavBar({ user, onLogout }) {
    return (
        <AppBar position="static" className="app-bar">
            <Toolbar className="container d-flex justify-content-between p-0">
                <div className="app-bar-logo">
                    <Typography variant="h4">
                        <span className="text-warning">Agro</span>
                        <span className="text-success-emphasis">hub</span>
                    </Typography>
                </div>
                <div>
                    {user ? (
                        <>
                            {user.role === "Admin" && (
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/dashboard"
                                >
                                    Dashboard
                                </Button>
                            )}
                            <Button component={Link} to="/map">
                                Map
                            </Button>
                            <Button onClick={onLogout}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button
                                component={Link}
                                size="large"
                                variant="contained"
                                color="success"
                                to="/"
                            >
                                Login
                            </Button>
                            <Button
                                component={Link}
                                size="large"
                                variant="outlined"
                                color="black"
                                to="/signup"
                                sx={{ ml: 2 }}
                            >
                                Sign Up
                            </Button>
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
}
