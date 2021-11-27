import { APP_TYPES } from "./App.types";
import { AnyAction } from "redux";

export type CatCategoriesType = [{ id: number; name: string }] | null;
export type CatsDataType = [{ id: number; url: string }] | null;

export interface AppState {
  categories: CatCategoriesType;
  categoriesLoading: boolean;
  categoriesError: string | null;
  catsData: CatsDataType;
  catsLoading: boolean;
  catsError: string | null;
  category_ids: number | null;
}

const initialState: AppState = {
  categories: null,
  categoriesLoading: false,
  categoriesError: null,
  catsData: null,
  catsLoading: true,
  catsError: null,
  category_ids: null,
};

export const app = (state = initialState, action: AnyAction): AppState => {
  switch (action.type) {
    case APP_TYPES.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        categoriesLoading: true,
      };
    case APP_TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        categoriesLoading: false,
      };
    case APP_TYPES.GET_CATEGORIES_FAIL:
      return {
        ...state,
        categoriesError: action.error,
        categoriesLoading: false,
      };
    case APP_TYPES.GET_CATS_REQUEST:
      return {
        ...state,
        catsLoading: true,
      };
    case APP_TYPES.GET_CATS_SUCCESS:
      return {
        ...state,
        category_ids: action.category_ids,
        catsData: action.payload,
        catsLoading: false,
      };
    case APP_TYPES.GET_CATS_FAIL:
      return {
        ...state,
        catsError: action.error,
        catsLoading: false,
      };
    case APP_TYPES.LOAD_MORE_CATS_REQUEST:
      return {
        ...state,
        catsLoading: true,
      };
    case APP_TYPES.LOAD_MORE_CATS_SUCCESS:
      return {
        ...state,
        catsData:
          action.payload &&
          state.catsData &&
          state.catsData.concat(action.payload),
        catsLoading: false,
      };
    case APP_TYPES.LOAD_MORE_CATS_FAIL:
      return {
        ...state,
        catsError: action.error,
        catsLoading: false,
      };
    default:
      return state;
  }
};
