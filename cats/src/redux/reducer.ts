import { PayloadAction } from "@reduxjs/toolkit";
import {
  FETCH_CATS_IMAGES,
  FETCH_CATS_CATEGORIES,
  FETCH_CATS_LIMIT,
  FETCH_CATS_IDS,
} from "./types";

const initialState = {
  categoria: [],
  cats: [],
  limit: 10,
  id: 5,
};
const postsReducer = (state = initialState, action: PayloadAction<[]>) => {
  switch (action.type) {
    case FETCH_CATS_IMAGES:
      return {
        ...state,
        cats: action.payload,
      };
    case FETCH_CATS_CATEGORIES:
      return {
        ...state,
        categoria: action.payload,
      };
    case FETCH_CATS_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case FETCH_CATS_IDS:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
