import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  posts: {},
  error: "",
  isLoading: true
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_SUCCESS":
      return {
        posts: payload,
        error: "",
        isLoading: false
      };
    case "FETCH_FAILURE":
      return {
        posts: {},
        error: payload,
        isLoading: false
      };
    default:
      return state;
  }
};

const DataFetching = () => {
  const [{posts,error,isLoading}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: "something went wrong" });
      });
  }, []);
  return (
    <div>
      {isLoading ? "Loading..." : posts.title}
      {error ? error : null}
    </div>
  );
};

export default DataFetching;
