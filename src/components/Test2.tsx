import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../redux/reducers/breedsSlice";
import { AppDispatch, RootState } from "../redux/store";
import BreedTable from "./BreedTable";
import PaginationControl from "./PaginationControl";
import { CircularProgress, Typography, Container, Box, AppBar, Toolbar, LinearProgress } from "@mui/material";
import HTTP_CODE from "../configs/httpCode";
import { useNavigate } from "react-router-dom";

const Test2: React.FC = () => {
    const { loading, breeds, error, pagination } = useSelector(
        (state: RootState) => state.breeds
    );
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchBreeds(1));
    }, [dispatch]);

    useEffect(() => {
        if (error === HTTP_CODE[401]) {
            navigate("/login");
        }
    }, [error, navigate]);

    const handlePageChange = (page: number) => {
        dispatch(fetchBreeds(page));
    };

    return (
        <Box>
            {/* AppBar */}
            <AppBar position="static" sx={{ backgroundColor: "#ccc" }}>
                {loading && <LinearProgress color="secondary" />}
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Dog Breeds
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Typography variant="h4" align="center" sx={{ marginTop: 3 }}>
                    Dog Breeds
                </Typography>
                {loading ? (
                    <Box textAlign="center" sx={{ marginTop: 3 }}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Box>
                        <Typography color="error" align="center" sx={{ marginTop: 3 }}>
                            {error}
                        </Typography>
                    </Box>
                ) : (
                    <>
                        <BreedTable breeds={breeds} />
                        <PaginationControl
                            currentPage={pagination.currentPage}
                            totalPages={pagination.totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
            </Container>
        </Box>
    );
};

export default Test2;
