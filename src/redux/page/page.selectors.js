import { createSelector } from "reselect";

const selectPageData = (state) => state.page;

export const selectData = createSelector(
  [selectPageData],
  (page) => page.pageData
);

export const selectLanguage = createSelector(
  [selectData], (data) => data.lang);

export const selectIsPageFetched = createSelector(
  [selectData],
  (pageData) => !!pageData
);

// Header

export const selectHeader = createSelector(
  [selectData], (data) =>
  data ? data.header : null
);

// Nav Bar

//dep
export const selectNavBar = createSelector(
  [selectData], (data) =>
  data ? data.navbar.navlinks : null
);

export const selectNav = createSelector(
  [selectData], (data) =>
  data ? data.navbar.navs : null
);


// Links

export const selectLinks = createSelector(
  [selectData], (data) =>
  data ? data.links : null
);

// Cards

export const selectProductCards = createSelector(
  [selectData], (data) =>
  data ? data.productcards : null
);

export const selectProductCardsTitle = createSelector(
  [selectProductCards], (pc) =>
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

// Services

export const selectServices = createSelector(
  [selectData], (data) =>
  data ? data.services : null
);

export const selectServicesTitles = createSelector(
  [selectServices], s => 
  s ? {
      title: s.title,
      subtitle: s.subtitle
    }
  : null
);

export const selectServiceSections = createSelector(
  [selectServices], s =>
  s ? s.services : null
);

export const selectServiceTreatments = createSelector(
  [selectServices], s =>
  s ? s.treatments : null
);

export const selectTreatmentTitles = createSelector(
  [selectServiceTreatments], st =>
  st ? {
    title: st.title,
    subtitle: st.subtitle
  } 
  : null
);

export const selectTreatments = createSelector(
  [selectServiceTreatments], t =>
  t ? t.names : null
);