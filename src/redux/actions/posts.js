import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data; // Return data for slice reducer
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
});

export const fetchFilteredPosts = createAsyncThunk(
  "posts/fetchFilteredPosts",
  async (filters) => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();

      let filteredPosts = data;

      // Apply filters if present
      if (filters.userId) {
        filteredPosts = filteredPosts.filter(
          (post) => post.userId === parseInt(filters.userId)
        );
      }

      if (filters.sortBy === "title") {
        filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
      }

      if (filters.bodyText) {
        filteredPosts = filteredPosts.filter((post) =>
          post.body.includes(filters.bodyText)
        );
      }

      return filteredPosts; // Return filtered data for slice reducer
    } catch (error) {
      throw new Error("Failed to fetch filtered posts");
    }
  }
);

export const clearFilters = () => {
  return { type: "posts/clearFilters" }; // Action creator for clearing filters
};
