import axios from "axios";
import {
    FETCH_BREEDS_REQUEST,
    FETCH_BREEDS_SUCCESS,
    FETCH_BREEDS_FAILURE,
    BreedsAction,
    Breed,
} from "../../type/breeds";
import { Dispatch } from "redux";

export const fetchBreeds = () => async (dispatch: Dispatch<BreedsAction>) => {
    dispatch({ type: FETCH_BREEDS_REQUEST });
    try {
        const response = await axios.get("https://dogapi.dog/api/v2/breeds");
        const breeds: Breed[] = response.data.data;
        dispatch({ type: FETCH_BREEDS_SUCCESS, payload: breeds });
    } catch (error) {
        const errorMessage = navigator.onLine
            ? "Failed to fetch breeds"
            : "You are offline. Please connect to the internet.";
        dispatch({ type: FETCH_BREEDS_FAILURE, payload: errorMessage });
    }
};
