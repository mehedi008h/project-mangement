import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// get all user
export const getUsers = createAsyncThunk(
    "user/getUsers",
    async (thunkApi) => {
        try {
            const response = await axios.get(`/api/v1/user`);
            console.log("Users Response:", response.data);
            if (response.data.statusCode === 400) {
                return thunkApi.rejectWithValue(response.data);
            }
            return response.data;
        } catch (error) {
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);

// get user details
export const getUserDetails = createAsyncThunk(
    "user/getUserDetails",
    async ({email}, thunkApi) => {
        try {
            const response = await axios.get(`/api/v1/user/${email}`);
            console.log("User Details Response:", response.data);
            if (response.data.statusCode === 400) {
                return thunkApi.rejectWithValue(response.data);
            }
            return response.data;
        } catch (error) {
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);
