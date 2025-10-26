import * as TbIcons from "react-icons/tb";
import * as FcIcons from "react-icons/fc";
import Logo from "@images/logo_square_white.png";
import Particles from "@bg_effect/particles";
import {
    Paper,
    FormGroup,
    TextField,
    InputAdornment,
    FormControlLabel,
    Checkbox,
    Button,
    Link,
    Divider,
} from "@mui/material";

import { GoogleIcon, FacebookIcon } from "@components/CustomIcons";

function Login() {
    return (
        <>
            <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={900}
                particleSpread={20}
                speed={0.2}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                opacity={0.1}
            />
            <div className="main-page-container">
                <div className="login-page-section">
                    <div className="app-login-page">
                        <div>
                            <img
                                src={Logo}
                                className="app-login-logo mb-4"
                                alt="agrohub-logo"
                            />
                        </div>
                        <Paper elevation={8} sx={{ width: 500, padding: 5 }}>
                            <form className="login-form">
                                <FormGroup>
                                    <h1 className="mb-3 text-start">
                                        Log Masuk
                                    </h1>
                                    <div className="mb-3 text-start">
                                        <label className="form-label">
                                            Emel atau Nama Pengguna
                                        </label>
                                        <div className="input-group w-100">
                                            <TextField
                                                size="small"
                                                fullWidth
                                                slotProps={{
                                                    input: {
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <TbIcons.TbAt size="1.5em" />
                                                            </InputAdornment>
                                                        ),
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label className="form-label">
                                            Kata Laluan
                                        </label>
                                        <div className="input-group w-100">
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    type="password"
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <TbIcons.TbLock size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <FormControlLabel
                                        sx={{ mb: 2 }}
                                        control={<Checkbox />}
                                        label="Ingat saya selama 30 hari"
                                    />
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="large"
                                    >
                                        LOG MASUK
                                    </Button>
                                </FormGroup>
                                <p className="mt-3">
                                    Belum ada akaun?{" "}
                                    <Link href="/signup">Daftar sekarang</Link>
                                </p>

                                <Divider className="my-4">ATAU</Divider>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    fullWidth
                                    startIcon={<GoogleIcon />}
                                >
                                    Log Masuk dengan Google
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    startIcon={<FacebookIcon />}
                                >
                                    Log Masuk dengan Facebook
                                </Button>
                            </form>
                        </Paper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
