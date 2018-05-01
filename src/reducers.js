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
      return { viewMode: action.viewMode, ...state };

    case SET_SIDEBAR_AVATAR_VISIBILITY:
      return { showAvatars: !!action.show, ...state };

    case SET_SIDEBAR_SORTING:
      return { sort: action.sort, ...state };

    default:
      return state;
  }
};

export default combineReducers({
  sidebar
});
