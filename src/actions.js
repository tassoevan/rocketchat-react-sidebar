export const SET_SIDEBAR_VIEWMODE = 'SET_SIDEBAR_VIEWMODE';
export const SET_SIDEBAR_AVATAR_VISIBILITY = 'SET_SIDEBAR_AVATAR_VISIBILITY';
export const SET_SIDEBAR_SORTING = 'SET_SIDEBAR_SORTING';

export const setSidebarViewMode = viewMode => ({
  action: SET_SIDEBAR_VIEWMODE,
  viewMode
});

export const setSidebarAvatarVisibility = show => ({
  action: SET_SIDEBAR_VIEWMODE,
  show: !!show
});

export const setSidebarSorting = sort => ({
  action: SET_SIDEBAR_VIEWMODE,
  sort
});
