import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data; // Devolvemos los datos para que se usen en el slice reducer
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
});
