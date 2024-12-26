import React from "react";
import { Box, Typography, Button, Container, Grid, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import thumbnail from '../assets/img/dog.png'

const GuestPage: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box textAlign={isMobile ? "center" : "left"}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    marginBottom: 2,
                                }}
                            >
                                Access Denied
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    marginBottom: 4,
                                }}
                            >
                                Sorry, you don't have permission to view the dog breeds list. Please sign in or contact the admin if
                                you think this is a mistake.
                            </Typography>
                            <Button
                                component={Link}
                                to="/login"
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ marginRight: 2 }}
                            >
                                Sign In
                            </Button>
                            <Button
                                component={Link}
                                to="/"
                                variant="outlined"
                                color="secondary"
                                size="large"
                            >
                                Back to Home
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={thumbnail}
                                alt="Access Denied"
                                style={{
                                    maxWidth: "100%",
                                    borderRadius: "8px",
                                    boxShadow: theme.shadows[3],
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GuestPage;
