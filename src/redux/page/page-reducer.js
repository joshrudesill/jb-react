import { PageActionTypes } from "./page.types";

const INITIAL_STATE = {
    pageData: {data: null}
}

const pageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PageActionTypes.SET_PAGE_DATA:
            return {
                ...state,
                pageData: action.payload
            }
        default:
            return state;
    }
}

export default pageReducer;