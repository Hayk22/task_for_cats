import axios from "axios";
import { AnyAction, Dispatch, Store } from "redux";
import {
  FETCH_CATS_CATEGORIES,
  FETCH_CATS_IDS,
  FETCH_CATS_IMAGES,
  FETCH_CATS_LIMIT,
} from "./types";

export const setLimit = (elem: number) => {
  return {
    type: FETCH_CATS_LIMIT,
    payload: elem,
  };
};

export const setIdForCat = (elem: number) => {
  return {
    type: FETCH_CATS_IDS,
    payload: elem,
  };
};

export const fetchPosts: (
  limit: number,
  id: number
) => (
  dispatch: Dispatch<AnyAction>,
  getState: Store<any, AnyAction>
) => Promise<void> = (limit, id) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${id}`
    );

    dispatch({
      type: FETCH_CATS_IMAGES,
      payload: response.data,
    });
  };
};

export const fetchCategories: () => (
  dispatch: Dispatch<AnyAction>,
  getState: Store<any, AnyAction>
) => Promise<void> = () => {
  return async (dispatch: Dispatch<AnyAction>, getState: Store) => {
    const response = await axios.get("https://api.thecatapi.com/v1/categories");

    dispatch({
      type: FETCH_CATS_CATEGORIES,
      payload: response.data,
    });
  };
};
