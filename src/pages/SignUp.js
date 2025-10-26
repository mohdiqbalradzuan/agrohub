import * as React from "react";
import PropTypes from "prop-types";
import * as TbIcons from "react-icons/tb";
import * as Hi2Icons from "react-icons/hi2";
import * as GoIcons from "react-icons/go";
import {
    Paper,
    FormControlLabel,
    TextField,
    InputAdornment,
    Grid,
    Button,
    Select,
    MenuItem,
    Tabs,
    Tab,
    Box,
    Checkbox,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

import myStates from "@data/my_states.json";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        maxHeight: "556px",
                        overflowY: "auto",
                        scrollbarWidth: "none",
                        p: 0,
                        pt: 1,
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function SignUp() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="main-page-container">
                <div className="login-page-section">
                    <div className="app-register-page">
                        <Paper elevation={8} sx={{ width: "60%", padding: 5 }}>
                            <h1 className="mb-3 text-start">
                                Pendaftaran Baru
                            </h1>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <Tab
                                    label="Maklumat Pengguna"
                                    {...a11yProps(0)}
                                />
                                <Tab
                                    label="Maklumat Perniagaan"
                                    {...a11yProps(1)}
                                />
                            </Tabs>

                            <CustomTabPanel value={value} index={0}>
                                <Grid container spacing={2}>
                                    <Grid item size={{ xs: 6, sm: 6, lg: 12 }}>
                                        <div className="text-start">
                                            <label className="form-label">
                                                Nama Pengguna
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <Hi2Icons.HiOutlineIdentification size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item size={{ xs: 6, sm: 6, lg: 12 }}>
                                        <div className="text-start">
                                            <label className="form-label">
                                                Alamat Emel Pengguna
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <Hi2Icons.HiOutlineEnvelope size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item size={{ xs: 6, sm: 6, lg: 6 }}>
                                        <div className="text-start">
                                            <label className="form-label">
                                                Alamat Surat Menyurat
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    multiline
                                                    rows={5}
                                                    maxRows={4}
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <Hi2Icons.HiHome size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item size={{ xs: 6, sm: 6, lg: 6 }}>
                                        <div className="text-start">
                                            <label className="form-label">
                                                Poskod
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <GoIcons.GoNumber size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-start mt-2">
                                            <label className="form-label">
                                                Negeri
                                            </label>
                                            <div className="input-group w-100">
                                                <Select fullWidth size="small">
                                                    {myStates.map((mystate) => (
                                                        <MenuItem
                                                            value={mystate.id}
                                                            key={mystate.id}
                                                        >
                                                            {mystate.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>
                                    </Grid>

                                    <Grid item size={{ xs: 6, sm: 6, lg: 6 }}>
                                        <div className="mb-3 text-start">
                                            <label className="form-label">
                                                No Telefon
                                            </label>
                                            <div className="input-group w-100">
                                                <MuiTelInput
                                                    defaultCountry="MY"
                                                    variant="outlined"
                                                    fullWidth
                                                    size="small"
                                                />
                                            </div>
                                        </div>
                                    </Grid>

                                    <Grid item size={{ xs: 6, sm: 6, lg: 6 }}>
                                        <div className="mb-3 text-start"></div>
                                    </Grid>

                                    <Grid item size={{ xs: 6, sm: 6, lg: 6 }}>
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
                                                                startAdornment:
                                                                    (
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
                                    </Grid>

                                    <Grid item size={{ xs: 6, sm: 6, lg: 6 }}>
                                        <div className="mb-3 text-start">
                                            <label className="form-label">
                                                Sahkan Kata Laluan
                                            </label>
                                            <div className="input-group w-100">
                                                <div className="input-group w-100">
                                                    <TextField
                                                        size="small"
                                                        fullWidth
                                                        type="password"
                                                        slotProps={{
                                                            input: {
                                                                startAdornment:
                                                                    (
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
                                    </Grid>
                                </Grid>
                            </CustomTabPanel>

                            <CustomTabPanel value={value} index={1}>
                                <Grid container spacing={2}>
                                    <Grid item size={{ xs: 6, sm: 6, lg: 12 }}>
                                        <div className="text-start">
                                            <label className="form-label">
                                                Nama Syarikat / Perniagaan
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <Hi2Icons.HiOutlineIdentification size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item size={{ xs: 6, sm: 6, lg: 12 }}>
                                        <div className="text-start">
                                            <label className="form-label">
                                                No SSM
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <GoIcons.GoNumber size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item size={{ xs: 6, sm: 6, lg: 6 }}>
                                        <div className="text-start">
                                            <label className="form-label">
                                                Alamat Ladang / Perniagaan
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    multiline
                                                    rows={5}
                                                    maxRows={4}
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <Hi2Icons.HiHome size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-start mt-2">
                                            <label className="form-label">
                                                No Telefon
                                            </label>
                                            <div className="input-group w-100">
                                                <MuiTelInput
                                                    defaultCountry="MY"
                                                    variant="outlined"
                                                    fullWidth
                                                    size="small"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-start mt-2">
                                            <FormControlLabel
                                                sx={{ mb: 2 }}
                                                control={<Checkbox />}
                                                label="Ladang memiliki sijil MyGAP"
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item size={{ xs: 6, sm: 6, lg: 6 }}>
                                        <div className="text-start">
                                            <label className="form-label">
                                                Poskod
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <GoIcons.GoNumber size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-start mt-2">
                                            <label className="form-label">
                                                Negeri
                                            </label>
                                            <div className="input-group w-100">
                                                <Select fullWidth size="small">
                                                    {myStates.map((mystate) => (
                                                        <MenuItem
                                                            value={mystate.id}
                                                            key={mystate.id}
                                                        >
                                                            {mystate.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="text-start mt-2">
                                            <label className="form-label">
                                                Latitud
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <GoIcons.GoNumber size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-start mt-2">
                                            <label className="form-label">
                                                Longitud
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <GoIcons.GoNumber size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item size={{ xs: 6, sm: 6, lg: 6 }}>
                                        <div className="text-start">
                                            <label className="form-label">
                                                Jumlah Pengeluaran Tahunan (KG)
                                            </label>
                                            <div className="input-group w-100">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <GoIcons.GoNumber size="1.5em" />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </CustomTabPanel>

                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                fullWidth
                                sx={{ mt: 3 }}
                            >
                                DAFTAR MASUK
                            </Button>
                        </Paper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
