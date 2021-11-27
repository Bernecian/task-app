import { APP_TYPES } from "./App.types";
import { AppDispatch, AppThunk } from "../../store/store";
import qs from "qs";

export const getCategories = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: APP_TYPES.GET_CATEGORIES_REQUEST,
    });

    const response = await fetch("https://api.thecatapi.com/v1/categories");
    const data = await response.json();
    dispatch({
      type: APP_TYPES.GET_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: APP_TYPES.GET_CATEGORIES_FAIL,
      error: e,
    });
  }
};
export interface GetCatsProps {
  limit: number;
  page: number;
  category_ids: number | null;
  isLoadMore?: boolean;
}
export const getCats =
  ({ limit, page, category_ids, isLoadMore }: GetCatsProps): AppThunk =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch({
          type: isLoadMore
            ? APP_TYPES.LOAD_MORE_CATS_REQUEST
            : APP_TYPES.GET_CATS_REQUEST,
        });
        const options = qs.stringify({
          limit: limit,
          page: page,
          category_ids: category_ids,
        });

        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?${options}`
        );
        const data = await response.json();
        dispatch({
          type: isLoadMore
            ? APP_TYPES.LOAD_MORE_CATS_SUCCESS
            : APP_TYPES.GET_CATS_SUCCESS,
          category_ids: category_ids,
          payload: data,
        });
      } catch (e) {
        dispatch({
          type: isLoadMore
            ? APP_TYPES.LOAD_MORE_CATS_FAIL
            : APP_TYPES.GET_CATS_FAIL,
          error: e,
        });
      }
    };
