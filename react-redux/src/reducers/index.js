import {  FETCH_CAT_DATA_START, FETCH_CAT_DATA_SUCCESS, FETCH_CAT_DATA_FAILURE} from "../actions";

const intitialState = {
    test: "test",
    isLoading: false,
    dogs: [],
    error: ''
}

export const reducer = (state = intitialState, action) => {
    switch (action.type){
        case FETCH_CAT_DATA_START:
             return {
                    ...state,
                    isLoading: true,
                     error: ''
      };
        case FETCH_CAT_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: '',
                dogs: action.payload,
            }
        default:
            return state;
    }
}