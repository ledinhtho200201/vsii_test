import {
    BreedsState,
    BreedsAction,
    FETCH_BREEDS_REQUEST,
    FETCH_BREEDS_SUCCESS,
    FETCH_BREEDS_FAILURE,
} from "../../type/breeds";

const initialState: BreedsState = {
    loading: false,
    breeds: [],
    error: null,
};

const breedsReducer = (state = initialState, action: BreedsAction): BreedsState => {
    switch (action.type) {
        case FETCH_BREEDS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_BREEDS_SUCCESS:
            return { ...state, loading: false, breeds: action.payload };
        case FETCH_BREEDS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default breedsReducer;
