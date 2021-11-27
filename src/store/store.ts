import thunk, { ThunkAction } from "redux-thunk";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { app } from "../common/app/App.reducer";
import {sidebar} from "../components/Layouts/components/Sidebar/Sidebar.reducer";

const store = createStore(
  combineReducers({
    sidebar,
    app,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
  >;
export default store;
