import { combineReducers } from 'redux';
import {
  SET_SIDEBAR_VIEWMODE,
  SET_SIDEBAR_AVATAR_VISIBILITY,
  SET_SIDEBAR_SORTING
} from './actions';

const initialSidebarState = {
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

    default:
      return state;
  }
};

export default combineReducers({
  sidebar
});
