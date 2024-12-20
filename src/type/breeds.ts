export interface Breed {
  id: string;
  attributes: {
    name: string;
    temperament?: string;
  };
}

export interface BreedsState {
  loading: boolean;
  breeds: Breed[];
  error: string | null;
}

export const FETCH_BREEDS_REQUEST = "FETCH_BREEDS_REQUEST";
export const FETCH_BREEDS_SUCCESS = "FETCH_BREEDS_SUCCESS";
export const FETCH_BREEDS_FAILURE = "FETCH_BREEDS_FAILURE";

interface FetchBreedsRequestAction {
  type: typeof FETCH_BREEDS_REQUEST;
}

interface FetchBreedsSuccessAction {
  type: typeof FETCH_BREEDS_SUCCESS;
  payload: Breed[];
}

interface FetchBreedsFailureAction {
  type: typeof FETCH_BREEDS_FAILURE;
  payload: string | null;
}

export type BreedsAction =
  | FetchBreedsRequestAction
  | FetchBreedsSuccessAction
  | FetchBreedsFailureAction;
