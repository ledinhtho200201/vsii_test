import axios from "axios";

export const getDog = () => {
    return axios.get('https://dogapi.dog/api/v2/breeds')
}

