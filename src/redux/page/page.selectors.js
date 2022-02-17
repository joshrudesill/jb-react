import { createSelector } from 'reselect';

const selectPageData = state => state.page;

export const selectData = createSelector(
    [selectPageData],
    page => page.pageData
);

export const selectHeader = createSelector(
    [selectData],
    dataS => dataS ? dataS.header : null
);

export const selectIsPageFetched = createSelector(
    [selectData],
    pageData => !!pageData
);