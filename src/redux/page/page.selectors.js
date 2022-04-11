import { createSelector } from "reselect";

const selectPageData = (state) => state.page;

export const selectData = createSelector(
  [selectPageData],
  (page) => page.pageData
);

export const selectHeader = createSelector([selectData], (data) =>
  data ? data.header : null
);

export const selectNavBar = createSelector([selectData], (data) =>
  data ? data.navbar.navlinks : null
);

export const selectLanguage = createSelector([selectData], (data) => data.lang);

export const selectIsPageFetched = createSelector(
  [selectData],
  (pageData) => !!pageData
);

export const selectLinks = createSelector([selectData], (data) =>
  data ? data.links : null
);

export const selectProductCards = createSelector([selectData], (data) =>
  data ? data.productcards : null
);

export const selectProductCardsTitle = createSelector(
  [selectProductCards],
  (pc) =>
    pc
      ? {
          toptext: pc.toptext,
          subtext: pc.subtext,
          bottomtitle: pc.bottomtitle,
          button: pc.button
        }
      : null
);

export const selectProductCardsData = createSelector(
  [selectProductCards],
  (pc) => (pc ? pc.cards : null)
);
