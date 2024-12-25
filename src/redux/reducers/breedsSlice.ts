import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Breed, BreedsState } from "../../type/breeds";
import { getDog } from "../../services/api";

const initialState: BreedsState = {
    loading: false,
    breeds: [],
    error: null,
};

// Định nghĩa action fetchBreeds
export const fetchBreeds = createAsyncThunk(
    "breeds/fetchBreeds",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getDog();
            return response.data.data as Breed[];
        } catch (error: any) {
            if (!navigator.onLine) {
                return rejectWithValue("You are offline. Please connect to the internet.");
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
            .addCase(fetchBreeds.fulfilled, (state, action: PayloadAction<Breed[]>) => {
                state.loading = false;
                state.breeds = action.payload;
            })
            .addCase(fetchBreeds.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default breedsSlice.reducer;
