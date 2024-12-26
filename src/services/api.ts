import axios from "axios";

export const getBreeds = (page: number = 1) => {
    if (page === 2) {
        const error = { response: { status: 403 } };
        throw error;
    }

    if (page === 3) {
        const error = { response: { status: 401 } };
        throw error;
    }

    return axios.get(`https://dogapi.dog/api/v2/breeds?page[number]=${page}`);
};
