import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchFilteredPosts } from "../../actions/posts";

const initialState = {
  posts: [],
  filteredPosts: [], // New field to store filtered posts
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setFilteredPosts(state, action) {
      // Action to set filtered posts
      state.filteredPosts = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearFilters(state) {
      // Action to clear filters
      state.filteredPosts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchFilteredPosts.fulfilled, (state, action) => {
        state.filteredPosts = action.payload;
      });
  },
});

export const { setPosts, setFilteredPosts, setError, clearFilters } =
  postSlice.actions;

export default postSlice.reducer;
