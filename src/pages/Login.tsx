import React, { useState } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Gửi thông tin đăng nhập đến API
        console.log("Logging in with:", { email, password });
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
                Login
            </Typography>
            <Box>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ marginBottom: 3 }}
                />
                <Button variant="contained" fullWidth onClick={handleLogin}>
                    Log In
                </Button>
            </Box>
            <Box mt={6} display="flex" justifyContent="center">
                <Button color="secondary" component={Link} to="/" variant="outlined">
                    Back to home
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
