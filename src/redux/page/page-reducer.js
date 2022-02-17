import { ENG } from "../../constants";
import PageActionTypes from "./page.types";

const INITIAL_STATE = {
    pageData: null,
    isFetching: false,
    errorMessage: undefined,
    lang: ENG
}

const pageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PageActionTypes.FETCH_PAGE_START:
            return {
                ...state,
                isFetching: true
            }
        case PageActionTypes.FETCH_PAGE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                pageData: action.payload
            }
        case PageActionTypes.FETCH_PAGE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
            
        default:
            return state;
    }
}

export default pageReducer;