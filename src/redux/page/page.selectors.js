import { createSelector, reselect } from 'reselect';

const selectPageData = state => state.pageData;

export const selectData = createSelector(
    [selectPageData],
    pageData => pageData.data
);

export const selectHeader = createSelector(
    [selectData],
    data => data.header
);

export const isPageFetching = createSelector(
    [selectPageData],
    pageData => pageData.isFetching
);

export const selectIsPageLoaded = createSelector(
    [selectPageData],
    pageData => !!pageData.data
);