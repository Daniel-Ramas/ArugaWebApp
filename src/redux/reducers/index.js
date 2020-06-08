import { combineReducers } from "redux";
import randomUserReducer from "./randomUserReducer";
import randomPhotosReducer from "./randomPhotosReducer";
import tiktokReducer from "./tiktokReducer";

export default combineReducers({
  randomUsers: randomUserReducer, //sets the randomUser state object and adds to it
  randomPhotos: randomPhotosReducer,
  tiktokVideo: tiktokReducer,
});
