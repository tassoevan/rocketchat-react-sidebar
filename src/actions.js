export const SET_SIDEBAR_VIEWMODE = 'SET_SIDEBAR_VIEWMODE';
export const SET_SIDEBAR_AVATAR_VISIBILITY = 'SET_SIDEBAR_AVATAR_VISIBILITY';
export const SET_SIDEBAR_SORTING = 'SET_SIDEBAR_SORTING';
export const SEARCH_IN_SIDEBAR = 'SEARCH_IN_SIDEBAR';
export const CLEAR_SEARCH_IN_SIDEBAR = 'CLEAR_SEARCH_IN_SIDEBAR';
export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';

export const setSidebarViewMode = viewMode => ({
  type: SET_SIDEBAR_VIEWMODE,
  viewMode
});

export const setSidebarAvatarVisibility = show => ({
  type: SET_SIDEBAR_AVATAR_VISIBILITY,
  show: !!show
});

export const setSidebarSorting = sort => ({
  type: SET_SIDEBAR_SORTING,
  sort
});

export const searchInSidebar = searchText => ({
  type: SEARCH_IN_SIDEBAR,
  text: searchText
});

export const clearSearchInSidebar = () => ({
  type: CLEAR_SEARCH_IN_SIDEBAR
});

export const showPopup = popupId => ({
  type: SHOW_POPUP,
  id: popupId
});

export const hidePopup = () => ({
  type: HIDE_POPUP
});
