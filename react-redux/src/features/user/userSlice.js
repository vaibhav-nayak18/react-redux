import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

// Generating pending, fulfilled, rejected action type
export const fetchUser = createAsyncThunk("user/fetchUsers", () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    return res.data;
  });
});

const useSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
  },
});
const userReducer = useSlice.reducer;
export default userReducer;
