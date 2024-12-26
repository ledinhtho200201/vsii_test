import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Breed, BreedsState } from "../../type/breeds";
import { getBreeds } from "../../services/api";
import HTTP_CODE from "../../configs/httpCode";

const initialState: BreedsState = {
    loading: false,
    breeds: [],
    error: null,
    pagination: {
        currentPage: 1,
        totalPages: 1,
    },
};

export const fetchBreeds = createAsyncThunk(
    "breeds/fetchBreeds",
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await getBreeds(page);
            if (response && response.status === 200) {
                const { data, links } = response.data;
                const totalPages = links.last
                    ? parseInt(links.last.split("page[number]=")[1], 10)
                    : 1;
                console.log("The request has been completed successfully");
                return { breeds: data, currentPage: page, totalPages };
            }
        } catch (error: any) {
            if (error.response && error.response.status === 403) {
                window.location.href = "/guest";
                return rejectWithValue(HTTP_CODE[403]);
            }
            if (error.response?.status === 401) {
                return rejectWithValue(HTTP_CODE[401]);
            }
            return rejectWithValue("Failed to fetch breeds.");
        }
    }
);

const breedsSlice = createSlice({
    name: "breeds",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBreeds.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBreeds.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.breeds = action.payload.breeds;
                state.pagination.currentPage = action.payload.currentPage;
                state.pagination.totalPages = action.payload.totalPages;
            })
            .addCase(fetchBreeds.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;

                if (action.payload === HTTP_CODE[401]) {
                    window.location.href = "/login";
                }
            });
    },
});

export default breedsSlice.reducer;
