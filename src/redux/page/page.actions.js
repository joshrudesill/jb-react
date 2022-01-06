import { PageActionTypes } from "./page.types";

export const setPageData = data => ({
    type: PageActionTypes.SET_PAGE_DATA,
    payload: data
});