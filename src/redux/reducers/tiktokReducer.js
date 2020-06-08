import { GET_TIKTOK } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TIKTOK:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
