import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../actions/posts";

const initialState = {
  posts: [],
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setPosts, setError } = postSlice.actions;

export default postSlice.reducer;
