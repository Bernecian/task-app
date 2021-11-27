import { AnyAction } from "redux";
import { SIDEBAR_TYPES } from "./Sidebar.types";

export interface SidebarState {
  isVisible: boolean;
}

const initialState: SidebarState = {
  isVisible: true,
};

export const sidebar = (
  state = initialState,
  action: AnyAction
): SidebarState => {
  switch (action.type) {
    case SIDEBAR_TYPES.TOGGLE_SIDEBAR:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};
