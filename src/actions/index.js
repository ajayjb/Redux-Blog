import axios from "axios";
import jsonPlaceHolder from "../api/JsonPlaceHolder";

const FetchPosts = () => {
  return async (dispatch) => {
    const post = await jsonPlaceHolder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: post });
  };
};

const fetchUser = (id) => {
  return async (dispatch) => {
    const res = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: res.data });
  };
};

export { FetchPosts, fetchUser };
