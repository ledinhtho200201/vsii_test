import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../redux/reducers/breedsSlice";
import { AppDispatch, RootState } from "../redux/store";
import { Typography, Box, CircularProgress } from "@mui/material";

const BreedDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { loading, breeds, error } = useSelector((state: RootState) => state.breeds);

    useEffect(() => {
        if (breeds.length === 0) {
            dispatch(fetchBreeds(1)); // Tải dữ liệu nếu danh sách giống chó rỗng
        }
    }, [dispatch, breeds]);

    const breed = breeds.find((b) => b.id === id);

    if (loading) {
        return (
            <Box textAlign="center" sx={{ marginTop: 3 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography color="error" align="center" sx={{ marginTop: 3 }}>
                {error}
            </Typography>
        );
    }

    if (!breed) {
        return (
            <Typography color="error" align="center" sx={{ marginTop: 3 }}>
                Breed not found.
            </Typography>
        );
    }

    return (
        <Box sx={{ marginTop: 3 }}>
            <Typography variant="h4" align="center">{breed.attributes.name}</Typography>
            <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
                {breed.attributes.description}
            </Typography>
            {breed.attributes.temperament && (
                <Typography variant="body2" align="center" sx={{ marginTop: 1 }}>
                    Temperament: {breed.attributes.temperament}
                </Typography>
            )}
        </Box>
    );
};

export default BreedDetails;
