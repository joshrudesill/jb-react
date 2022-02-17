import PageActionTypes from "./page.types";
import { firestore } from '../../firebase/firebase.utils';

export const setPageData = data => ({
    type: PageActionTypes.SET_PAGE_DATA,
    payload: data
});

export const fetchPageStart = () => ({
    type: PageActionTypes.FETCH_PAGE_START,
});

export const fetchPageSuccess = pageData => ({
    type: PageActionTypes.FETCH_PAGE_SUCCESS,
    payload: pageData
});

export const fetchPageFailure = errorMessage => ({
    type: PageActionTypes.FETCH_PAGE_FAILURE,
    payload: errorMessage
});

export const updatePageLang = (lang) => {
    return dispatch => {
        dispatch(fetchPageStartAsync(lang));
    }
}
export const fetchPageStartAsync = lang => {
    return dispatch => {
        const collectionRef = firestore.collection('sitedata').where("lang", "==", lang);
        dispatch(fetchPageStart);
        collectionRef.get().then(snapshot => {
            dispatch(fetchPageSuccess(snapshot.docs[0].data()));
        }).catch(error => dispatch(fetchPageFailure(error)));
    }
}

