import {SIDEBAR_TYPES} from "./Sidebar.types";
import { AppDispatch, AppThunk } from "../../../../store/store";

export const toggleSidebar = ():AppThunk => (dispatch: AppDispatch) => {
    dispatch({
      type: SIDEBAR_TYPES.TOGGLE_SIDEBAR
  });
}