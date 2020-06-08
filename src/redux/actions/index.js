import { GET_USER, GET_PHOTOS, GET_TIKTOK } from "./types";
import randomUserMe from "../../api/randomUserMe";
import unsplash from "../../api/unsplash";
import tiktok from "../../api/tiktok";

export const getUser = (amount) => async (dispatch) => {
  const response = await randomUserMe.get(`/?results=${amount}`);

  dispatch({ type: GET_USER, payload: response.data.results });
};

export const getPhotos = () => async (dispatch) => {
  const response = await unsplash.get("/search/photos/", {
    params: {
      query: "art",
    },
    headers: {
      Authorization: "Client-ID 9jBCw8pKzYy5cHbH2XETsbeiu-85pOfsFzV98JkM4sw",
    },
  });

  dispatch({ type: GET_PHOTOS, payload: response.data.results });
};

export const getTikTok = () => async (dispatch) => {
  const response = await tiktok.get();
  dispatch({ type: GET_TIKTOK, payload: response.data });
};

//action is called, dispatched to reducer, the payload will added to state object
//remember to pass in dispatch
