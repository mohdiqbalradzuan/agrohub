import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function NavBar({ user, onLogout }) {
    return (
        <div className="app-bar-bg">
            <AppBar position="fixed" className="app-bar">
                <Toolbar className="container d-flex justify-content-between p-0">
                    <Typography
                        component={Link}
                        to="/"
                        variant="h4"
                        sx={{ textDecoration: "none", color: "inherit" }}
                    >
                        <span className="text-warning app-firstname">Agro</span>
                        <span className="text-success-emphasis">hub</span>
                    </Typography>
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
                                    Peta
                                </Button>
                                <Button onClick={onLogout}>Log Keluar</Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    component={Link}
                                    size="large"
                                    variant="contained"
                                    color="success"
                                    to="/login"
                                >
                                    Log Masuk
                                </Button>
                                <Button
                                    component={Link}
                                    size="large"
                                    variant="outlined"
                                    color="black"
                                    to="/signup"
                                    sx={{ ml: 2 }}
                                >
                                    Daftar
                                </Button>
                                <Button
                                    component={Link}
                                    size="large"
                                    variant="outlined"
                                    color="black"
                                    to="/map"
                                    sx={{ ml: 2 }}
                                >
                                    Peta
                                </Button>
                            </>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
