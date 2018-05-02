import { combineReducers } from 'redux';
import {
  SET_SIDEBAR_VIEWMODE,
  SET_SIDEBAR_AVATAR_VISIBILITY,
  SET_SIDEBAR_SORTING,
  SEARCH_IN_SIDEBAR,
  CLEAR_SEARCH_IN_SIDEBAR,
  SHOW_POPUP,
  HIDE_POPUP
} from './actions';

const initialSidebarState = {
  searchText: null,
  viewMode: 'extended',
  showAvatars: true,
  sort: 'alphabetical'
};

const sidebar = (state = initialSidebarState, action) => {
  switch (action.type) {
    case SET_SIDEBAR_VIEWMODE:
      return {
        ...state,
        viewMode: action.viewMode
      };

    case SET_SIDEBAR_AVATAR_VISIBILITY:
      return {
        ...state,
        showAvatars: !!action.show
      };

    case SET_SIDEBAR_SORTING:
      return {
        ...state,
        sort: action.sort
      };

    case SEARCH_IN_SIDEBAR:
      return {
        ...state,
        searchText: action.text
      };

    case CLEAR_SEARCH_IN_SIDEBAR:
      return {
        ...state,
        searchText: null
      };

    default:
      return state;
  }
};

const initialPopupState = {
  visiblePopupId: null
};

const popup = (state = initialPopupState, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        ...state,
        visiblePopupId: action.id
      };

    case HIDE_POPUP:
      return {
        ...state,
        visiblePopupId: null
      };

    default:
      return state;
  }
};

export default combineReducers({
  sidebar,
  popup
});
